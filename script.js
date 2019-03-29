const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Vel {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  add(vector){
    this.dx = this.dx + vector.dx;
    this.dy = this.dy + vector.dy;
  }
}

class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  pos(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.lineWidth= 4;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();  }
}

let balls = [];

function randomNumber(min,max){
  return Math.random()*(max - min) + min;
}

function animate(){
  requestAnimationFrame(animate);
  if(Math.random()<0.4){
      let ball = {};
      ball.point = new Ball(0,0,30,'#' + Math.floor(randomNumber(0,255*255*255)).toString(16));
      ball.pos = new Vel(randomNumber(0,canvas.width),-5);
      ball.vel = new Vel(0,randomNumber(0,5));
      balls.push(ball);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle= "rgba(0,0,0,0.05)"
  context.fillRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < /*balls.length*/20; i++) {
    balls[i].pos.add(balls[i].vel);
    balls[i].point.pos(balls[i].pos);
    balls[i].point.draw(context);


    if(balls[i].pos.dy > canvas.height-balls[i].point.r){
      balls.splice(i,1);
    }
  }

}

animate();
