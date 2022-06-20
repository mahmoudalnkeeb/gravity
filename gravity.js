// F(in Newtons) = M(in KGs) * A => 9.8 m/s


class Entity {
  constractor(entityInfo) {
    this.name = entityInfo.name;
    this.position.y = entityInfo.positionY;
    this.position.x = entityInfo.positionX;
    this.width = entityInfo.width;
    this.height = entityInfo.height;
    this.mass = entityInfo.mass;
    this.color = entityInfo.color
  }
  renderEntity(){
    const e = document.createElement('div')
    e.classList.add(this.name)
    e.style.width = this.width + 'px'
    e.style.height = this.height + 'px'
    e.style.backgroundColor = this.color
  }
}
class Game {
  constractor(frames, gravity = 9.8) {
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
