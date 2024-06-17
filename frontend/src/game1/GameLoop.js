import { Input, LEFT, RIGHT, UP, DOWN } from "./Input.js";
import { showQuestionModal } from "./Game1.vue";

export class GameLoop {
  constructor(character, characterPos, skySprite, groundSprite, ctx, canvas, collectibles, showQuestionModal) {
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000 / 60;

    this.character = character;
    this.characterPos = characterPos;
    this.skySprite = skySprite;
    this.groundSprite = groundSprite;
    this.ctx = ctx;
    this.canvas = canvas;

    this.collectibles = collectibles;

    this.rafId = null;
    this.isRunning = false;
    this.input = new Input();

    this.showQuestionModal = showQuestionModal;
  }

  mainLoop(timestamp) {
    if (!this.isRunning) return;

    let deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    this.accumulatedTime += deltaTime;

    while (this.accumulatedTime >= this.timeStep) {
      this.update();
      this.accumulatedTime -= this.timeStep;
    }

    // Render
    this.draw();

    this.rafId = requestAnimationFrame((timestamp) => this.mainLoop(timestamp));
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this.mainLoop.bind(this));
    }
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunning = false;
  }

  draw() {
    this.skySprite.drawImage(this.ctx, 0, 0);

    const groundWidth = 720;
    const groundHeight = 720;

    const x = (this.canvas.width - groundWidth) / 2;
    const y = (this.canvas.height - groundHeight) / 2;

    this.groundSprite.drawImage(this.ctx, x, y, groundWidth, groundHeight);

    this.character.drawImage(this.ctx, this.characterPos.x, this.characterPos.y);
    this.collectibles.forEach((item) => item.draw(this.ctx));
  }

  update() {
    if (this.input.direction === DOWN) {
      this.characterPos.y += 3;
    }
    if (this.input.direction === UP) {
      this.characterPos.y -= 3;
    }
    if (this.input.direction === LEFT) {
      this.characterPos.x -= 3;
      this.character.frame = 14;
    }
    if (this.input.direction === RIGHT) {
      this.characterPos.x += 3;
      this.character.frame = 8;
    }

    this.collectibles.forEach((item) => {
      if (
        !item.collected &&
        this.characterPos.x < item.position.x + 16 &&
        this.characterPos.x + 56 > item.position.x &&
        this.characterPos.y < item.position.y + 16 &&
        this.characterPos.y + 56 > item.position.y
      ) {
        item.collected = true;
        this.showQuestionModal(item);
        stop();
      }
    });
  }
}
