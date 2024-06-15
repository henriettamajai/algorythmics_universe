<template>
  <div>
    <Navigation />
    <div class="centered-container">
      <div ref="gameContainer" class="game-container">
        <canvas id="game-canvas" width="1280px" height="720" class="rounded-lg"></canvas>
        <div class="collected-counter">
          <p>Collected: {{ collectedCount }}</p>
        </div>
      </div>
    </div>

    <IntroModal 
      :visible="introVisible" 
      @close="closeIntroModal" 
    />
    <QuestionModal 
      v-if="questionVisible"
      :visible="questionVisible"
      :question="currentQuestion.question"
      :answers="currentQuestion.answers"
      @answer="handleAnswer"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Vector2 } from './Vector2';
import { resources } from './Resource';
import { Sprite } from './Sprite';
import { GameLoop } from './GameLoop';
import { Input, LEFT, RIGHT, UP, DOWN } from './Input.js';
import Navigation from '@/components/Navigation.vue';
import { Collectible } from './Collectible.js';
import IntroModal from './IntroModal.vue';
import QuestionModal from './QuestionModal.vue';

export default {
  components: { Navigation, IntroModal, QuestionModal },
  setup() {
    const introVisible = ref(true);
    const questionVisible = ref(false);
    const currentQuestion = ref(null);
    let gameLoop = null;
    
    const collectibles = [
      new Collectible('int', 42, new Vector2(455, 140), 'sprites/circle.png'),
      new Collectible('string', 'moon', new Vector2(750, 247), 'sprites/moon.png'),
      new Collectible('boolean', true, new Vector2(700, 500), 'sprites/circle2.png'),
      new Collectible('char', 'A', new Vector2(850, 200), 'sprites/circle3.png'),
      new Collectible('float', 12.5, new Vector2(750, 650), 'sprites/rock.png')
    ];

    const collectedCount = ref(0); 

    const startGame = () => {
      const canvas = document.getElementById("game-canvas");
      const ctx = canvas.getContext("2d");

      const skySprite = new Sprite({
        resource: resources.images.sky,
        frameSize: new Vector2(1280, 720)
      });

      const groundSprite = new Sprite({
        resource: resources.images.ground,
        frameSize: new Vector2(1280, 720)
      });

      const character = new Sprite({
        resource: resources.images.character,
        frameSize: new Vector2(64, 64),
        hFrames: 4,
        vFrames: 4,
        frame: 1
      });

      const characterPos = new Vector2((canvas.width - 64) / 2, (canvas.width - 64) / 2);
      const input = new Input();

      const update = () => {
        if (input.direction === DOWN) {
          characterPos.y += 3;
        }
        if (input.direction === UP) {
          characterPos.y -= 3;
        }
        if (input.direction === LEFT) {
          characterPos.x -= 3;
          character.frame = 14;
        }
        if (input.direction === RIGHT) {
          characterPos.x += 3;
          character.frame = 8;
        }

        collectibles.forEach(item => {
          if (!item.collected &&
              characterPos.x < item.position.x + 16 &&
              characterPos.x + 56 > item.position.x &&
              characterPos.y < item.position.y + 16 &&
              characterPos.y + 56 > item.position.y) {
            item.collected = true;
            showQuestionModal(item);
            gameLoop.stop();
          }
        });
      };

      const draw = () => {
        skySprite.drawImage(ctx, 0, 0);

        const groundWidth = 720;
        const groundHeight = 720;

        const x = (canvas.width - groundWidth) / 2;
        const y = (canvas.height - groundHeight) / 2;

        groundSprite.drawImage(ctx, x, y, groundWidth, groundHeight);

        character.drawImage(ctx, characterPos.x, characterPos.y);
        collectibles.forEach(item => item.draw(ctx));

      
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Collected: ${collectedCount.value}`, 20, canvas.height - 20);
      };

      gameLoop = new GameLoop(update, draw);
      gameLoop.start();
    };

    const closeIntroModal = () => {
      introVisible.value = false;
    };

    const showQuestionModal = (item) => {
      questionVisible.value = true;
      currentQuestion.value = {
        question: `What is the type of the collected "${item.value}" item?`,
        answers: [
          { text: 'int', correct: item.type === 'int' },
          { text: 'string', correct: item.type === 'string' },
          { text: 'boolean', correct: item.type === 'boolean' },
          { text: 'char', correct: item.type === 'char' },
          { text: 'float', correct: item.type === 'float' }
        ],
        item: item 
      };
    };

    const handleAnswer = (answer) => {
      if (answer.correct) {
        const collectible = collectibles.find(item => item.value === currentQuestion.value.item.value);
        if (collectible) {
          collectible.collected = true; 
          collectedCount.value++;
        }
        questionVisible.value = false;
        gameLoop.start();
      }
    };

    onMounted(() => {
      startGame();
    });

    return {
      introVisible,
      questionVisible,
      currentQuestion,
      closeIntroModal,
      showQuestionModal,
      handleAnswer,
      collectedCount
    };
  }
};
</script>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
}

.game-container {
  position: relative;
}
</style>
