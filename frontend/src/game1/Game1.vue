<template>
  <div>
    <Navigation />
    <div class="centered-container">
      <div ref="gameContainer" class="game-container">
        <canvas id="game-canvas" width="1280px" height="720"></canvas>
      </div>
    </div>
    <IntroModal 
      :visible="introVisible" 
      @close="closeIntroModal" 
    />
    <Modal 
      :question="currentQuestion" 
      :visible="modalVisible" 
      @submit="handleAnswer" 
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
import Modal from './Modal.vue';

export default {
  components: { Navigation, IntroModal, Modal },
  setup() {
    const introVisible = ref(true);
    const modalVisible = ref(false);
    const currentQuestion = ref('');
    let currentCollectible = null;
    let gameLoop = null;
    const message = ref('');

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

      const collectibles = [
        new Collectible('number', 42, new Vector2(455, 140), 'sprites/circle.png'),
        new Collectible('string', 'moon', new Vector2(750, 247), 'sprites/moon.png'),
        new Collectible('boolean', true, new Vector2(700, 500), 'sprites/circle2.png'),
        new Collectible('char', 'A', new Vector2(850, 200), 'sprites/circle3.png'),
        new Collectible('float', 12.5, new Vector2(750, 650), 'sprites/rock.png')
      ];

      const update = () => {
        if (input.direction === DOWN) {
          characterPos.y += 1;
        }
        if (input.direction === UP) {
          characterPos.y -= 1;
        }
        if (input.direction === LEFT) {
          characterPos.x -= 1;
          character.frame = 14;
        }
        if (input.direction === RIGHT) {
          characterPos.x += 1;
          character.frame = 8;
        }

        collectibles.forEach(item => {
          if (!item.collected &&
              characterPos.x < item.position.x + 32 &&
              characterPos.x + 64 > item.position.x &&
              characterPos.y < item.position.y + 32 &&
              characterPos.y + 64 > item.position.y) {
            item.collected = true;
            gameLoop.stop();
            askQuestion(item);
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
      };

      gameLoop = new GameLoop(update, draw); 
      gameLoop.start();
    };

    const askQuestion = (item) => {
      currentQuestion.value = `Mi a változó típusa ennek az értéknek: ${item.value}?`;
      currentCollectible = item;
      modalVisible.value = true;
    };

    const handleAnswer = (answer) => {
      if (answer !== null && ((currentCollectible.type === 'int' && answer.toLowerCase() === 'int') ||
          (currentCollectible.type === 'string' && answer.toLowerCase() === 'string') ||
          (currentCollectible.type === 'boolean' && answer.toLowerCase() === 'boolean') ||
          (currentCollectible.type === 'char' && answer.toLowerCase() === 'char') ||
          (currentCollectible.type === 'float' && answer.toLowerCase() === 'float'))) {
        message.value = 'Correct answer! Item collected!';
      } else {
        message.value = 'Incorrect answer! Try again!';
        currentCollectible.collected = false;
      }
      modalVisible.value = false;
      gameLoop.start();
    };


    const closeIntroModal = () => {
      introVisible.value = false;
    };

    onMounted(() => {
      startGame();
    });

    return {
      introVisible,
      modalVisible,
      currentQuestion,
      message,
      handleAnswer,
      closeIntroModal,
      startGame
    };
  }
};
</script>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
}
</style>
