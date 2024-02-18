<template>
  <div>
    <Navigation />
    <div class="centered-container">
      <div ref="gameContainer" class="game-container">
        <canvas id="game-canvas" width="1280px" height="720"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Vector2 } from './Vector2';
import { resources } from './Resource';
import { Sprite } from './Sprite';
import { GameLoop } from './GameLoop';
import { Input, LEFT, RIGHT, UP, DOWN } from './Input.js';
import Navigation from '@/components/Navigation.vue';

onMounted(() => {
  startGame(); 
});

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
  };

  const draw = () => {
    skySprite.drawImage(ctx, 0, 0);

    const groundWidth = 720;
    const groundHeight = 720;

    const x = (canvas.width - groundWidth) / 2;
    const y = (canvas.height - groundHeight) / 2;

    groundSprite.drawImage(ctx, x, y, groundWidth, groundHeight);

    character.drawImage(ctx, characterPos.x, characterPos.y);
  };

  const gameLoop = new GameLoop(update, draw);
  gameLoop.start();
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
