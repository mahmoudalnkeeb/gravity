// F(in Newtons) = M(in KGs) * A =>9.8 m/s
let gameContainer = document.getElementById('game-container');

class Entity {
  constructor(entityInfo) {
    this.name = entityInfo.name;
    this.positionY = entityInfo.positionY;
    this.positionX = entityInfo.positionX;
    this.width = entityInfo.width;
    this.height = entityInfo.height;
    this.mass = entityInfo.mass;
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
    console.log(this.info);
    return e;
  }
}
class Game {
  constructor(frames, gravity = 9.8) {
    this.frames = frames;
    this.gravity = gravity;
  }
  animate(func) {
    setInterval(() => {
      func();
    }, 1000 / this.frames);
  }
  gravity() {
    this.animate(() => {});
  }
}
let entityInfo = {
  name: 'player-entity',
  positionX: 0,
  positionY: 0,
  width: 50,
  height: 50,
  mass: 1,
  color: 'red',
};
let player = new Entity(entityInfo);
gameContainer.appendChild(player.renderEntity());