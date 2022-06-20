// F(in Newtons) = M(in KGs) * A =>9.8 m/s
let gameContainer = document.getElementById('game-container');

class Entity {
  constructor(entityInfo) {
    this.name = entityInfo.name;
    this.positionY = entityInfo.positionY;
    this.positionX = entityInfo.positionX;
    this.width = entityInfo.width;
    this.height = entityInfo.height;
    this.color = entityInfo.color;
    this.info = entityInfo;
  }
  renderEntity() {
    const e = document.createElement('div');
    e.classList.add(this.name);
    e.style.width = this.width + 'px';
    e.style.height = this.height + 'px';
    e.style.top = this.positionY + 'px';
    e.style.left = this.positionX + 'px';
    e.style.backgroundColor = this.color;
    return e;
  }
}
class Game {
  constructor(frames, a = 9.8, ground) {
    this.frames = frames;
    this.a = a;
    this.ground = ground;
  }
  animate(func) {
    setInterval(() => {
      func();
    }, 1000 / this.frames);
  }
  gravity() {
    let posY = 10;
    let aPerTime = this.a / this.frames;
    this.animate(() => {
      gameContainer.innerHTML = '';
      let entityInfo = {
        name: 'player-entity',
        positionX: 10,
        positionY: posY,
        width: 50,
        height: 50,
        color: 'green',
      };
      aPerTime += this.a / this.frames;
      console.log(aPerTime);
      let playerEntity = new Entity(entityInfo);
      let player = playerEntity.renderEntity();
      if (posY >= this.ground) {
        posY = this.ground;
      } else {
        posY = posY + aPerTime;
      }
      // console.log(posY);
      gameContainer.appendChild(player);
    });
  }
}
let ground = gameContainer.offsetHeight - 50;
let world = new Game(60, 9.8, ground);
world.gravity();
