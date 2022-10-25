var mouseX = 0
var mouseY = 0
var mouseButton = false;
var canvas;
var ctx;
function draw() {
    canvas= document.getElementById("canvas");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(20, 20, 20)";
      ctx.fillRect(0, 0, 3000, 3000);
    }
  }
document.onmousedown = () => {
	mouseButton = true
	ctx.beginPath();
	ctx.strokeStyle = 'green';
	ctx.lineWidth = 15;
	console.log("down")
}
document.onmouseup = () => {
	mouseButton = false
}
document.onmousemove = (event) => {
  const {
    clientX,
    clientY
  } = event
  mouseX = clientX;
  mouseY = clientY;
  if(mouseButton){
  	ctx.lineTo(mouseX, mouseY);
  	ctx.stroke();
  }
}