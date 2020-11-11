class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    console.log(this.body);
    this.disappearing = 255;
  }
  display(){
    var speed = this.body.speed;
    if(speed < 2.5){
      super.display();
    }
    else {
      World.remove(world,this.body);
      push();
      this.disappearing-=5;
      tint(255,this.disappearing);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
};