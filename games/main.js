import { resources } from './src/resource';
import './style.css'

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const draw = () => {
  const sky = resources.images.sky;
  if (sky.isLoaded) {
    ctx.drawImage(sky.image, 0, 0);
  }

  const ground = resources.images.ground;
  if (ground.isLoaded) {
     ctx.imageSmoothingEnabled = false;
    const scaleX = canvas.width / ground.image.width;
    const scaleY = canvas.height / ground.image.height;
    
    const scale = Math.min(scaleX, scaleY);
    
   
    const scaledWidth = ground.image.width * scale;
    const scaledHeight = ground.image.height * scale;
    
    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;
    
    ctx.drawImage(ground.image, x, y, scaledWidth, scaledHeight);
  }
}


setInterval( ()  => {

  draw()
}, 300)