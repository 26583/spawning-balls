const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  pos(vector){
    this.x = move.mx;
    this.y = move.my;
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
      balls.push(ball);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle= "rgba(0,0,0,0.05)"
  context.fillRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < /*balls.length*/20; i++) {


    if(balls[i].y > canvas.height-balls[i].r){
      balls.splice(i,1);
    }
  }

}

animate();
