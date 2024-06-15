<template>
  <div>
    <Navigation />
    <div class="centered-container">
      <div ref="gameContainer" class="game-container" style="position: relative;">
        <canvas id="game-canvas" width="1280px" height="720"></canvas>
        <CollectedItems :collectedItems="collectedItems" style="position: absolute; bottom: 10px; right: 10px;" />
      </div>
    </div>
    <IntroModal 
      :visible="introVisible" 
      @close="closeIntroModal" 
    />
    <Modal 
      :visible="messageVisible"
      @close="closeMessageModal"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Vector2 } from '../game1/Vector2';
import { resources } from './Resource';
import { Sprite } from '../game1/Sprite';
import { GameLoop } from '../game1/GameLoop';
import { Input, LEFT, RIGHT, UP, DOWN } from '../game1/Input.js';
import Navigation from '@/components/Navigation.vue';
import { Collectible } from '../game1/Collectible.js';
import IntroModal from './IntroModal.vue';
import CollectedItems from './CollectedItems.vue';
import Modal from './Modal.vue';

export default {
  components: { Navigation, IntroModal, CollectedItems, Modal },
  setup() {
    const introVisible = ref(true);
    let gameLoop = null;
    const collectibles = ref([]);
    const collectedItems = ref([]);
    const messageVisible = ref(false);

    let messageTimer = null; 

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

      collectibles.value = [
        new Collectible('number', 42, new Vector2(455, 140), 'sprites/circle.png'),
        new Collectible('string', 'moon', new Vector2(750, 247), 'sprites/moon.png'),
        new Collectible('boolean', true, new Vector2(700, 500), 'sprites/circle2.png'),
        new Collectible('char', 'A', new Vector2(850, 200), 'sprites/circle3.png'),
        new Collectible('float', 12.5, new Vector2(750, 650), 'sprites/rock.png'),
        new Collectible('float', 7.3, new Vector2(600, 400), 'sprites/rock.png'),
         new Collectible('float', 9.8, new Vector2(450, 600), 'sprites/rock.png')
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

        collectibles.value.forEach(item => {
          if (!item.collected &&
              characterPos.x < item.position.x + 32 &&
              characterPos.x + 64 > item.position.x &&
              characterPos.y < item.position.y + 32 &&
              characterPos.y + 64 > item.position.y) {
            if (item.type !== 'float') {
              showMessageModal();
              return;
            }
            item.collected = true;
            collectedItems.value.push(item);
            closeMessageModal();
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
        collectibles.value.forEach(item => item.draw(ctx));
      };

      gameLoop = new GameLoop(update, draw); 
      gameLoop.start();
    };

    const showMessageModal = () => {
      messageVisible.value = true;

      // Időzítő beállítása 5 másodpercre
      messageTimer = setTimeout(() => {
        closeMessageModal();
      }, 5000);
    };

    const closeMessageModal = () => {
      messageVisible.value = false;
      clearTimeout(messageTimer); // Időzítő törlése, hogy ne záródjon be újra
    };

    const closeIntroModal = () => {
      introVisible.value = false;
    };

    onMounted(() => {
      startGame();
    });

    return {
      introVisible,
      closeIntroModal,
      collectedItems,
      messageVisible,
      closeMessageModal
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
