import { Vector2 } from "./Vector2.js";

export class Collectible {
  constructor(question, choices, answerIndex, imagePath, positionX, positionY) {
    this.text = "?";
    this.question = question;
    this.choices = choices;
    this.answerIndex = answerIndex;
    this.position = new Vector2(positionX, positionY);
    this.image = new Image();
    this.image.src = imagePath;
  }

  draw(ctx) {
    if (!this.collected) {
      ctx.drawImage(this.image, this.position.x, this.position.y, 50, 50);
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.font = '16px Arial';
      const centerX = this.position.x + 25; 
      const centerY = this.position.y + 30;
      ctx.fillText(this.text, centerX, centerY);
      
    }
  }
}