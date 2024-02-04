import { Vector2 } from './src/Vector2';
import { resources } from './src/resource';
import { Sprite } from './src/Sprite';
import './style.css'
import { GameLoop } from './src/GameLoop';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

 const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(1280,720)
 })

 const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(1280,720)
 })



  const character = new Sprite({
    resource: resources.images.character,
    frameSize: new Vector2(64,64),
    hFrames: 4, 
    vFrames: 4,
    frame: 1
  })


const characterPos = new Vector2((canvas.width - 64)/2, (canvas.width - 64)/2);

const update = () => {
  character.frame += 1;
}
const draw = () => {
  skySprite.drawImage(ctx, 0, 0);

  const groundWidth = 720;
  const groundHeight = 720;

  const x = (canvas.width - groundWidth) / 2;
  const y = (canvas.height - groundHeight) / 2;
  
  groundSprite.drawImage(ctx, x, y, groundWidth, groundHeight);

  character.drawImage(ctx, characterPos.x, characterPos.y);
};

const gameLoop = new GameLoop(update,draw);
gameLoop.start();
