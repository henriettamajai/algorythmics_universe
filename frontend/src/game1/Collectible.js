export class Collectible {
  constructor(type, value, position, imageSrc) {
    this.type = type;
    this.value = value;

    this.position = position;
    this.collected = false;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  draw(ctx) {
    if (!this.collected) {
      ctx.drawImage(this.image, this.position.x, this.position.y, 40, 40);
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      const centerX = this.position.x + 20; 
      const centerY = this.position.y + 22;
      ctx.fillText(this.value, centerX, centerY);
      
    }
  }
}
