var x = 10;
var y = 50;

var width = 500;
var height = 500;

var velx = 1;
var vely = 1;

var c;
var ctx;

var color = {};
color.white = "#FFFFFF";
color.red = "#FF0000";
color.random = "#FF0000";
function touchHandler(event) {

    var xTouch = event.touches[0].pageX;
    var yTouch = event.touches[0].pageY;
    color.random = Math.floor(Math.random()*16777215).toString(16);
}


function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    //ctx.fillText("Hello World",x,y);

    var touchzone = document.getElementById("myCanvas");
    // Add an event handler for the touchstart event
    touchzone.addEventListener("touchstart", touchHandler, false);

}

function update() {
    x+=velx;
    y+=vely;

    if(x<=0)
    {
        velx *= -1;
    }
    if(x+200>=width)
    {
        velx *= -1;
    }
    if(y<0)
    {
        vely *= -1;
    }
    if(y>= height)
    {
        vely *= -1;
    }





}

function draw() {
    ctx.fillStyle = color.white;
    ctx.fillRect(0,0,700,500);
    ctx.fillStyle = color.random;
    ctx.fillText("I love you my amazing Rae!!!",x,y);
}

function game()
{
    update();
    draw();
}

window.onload = init;
setInterval(game,1000.0/30.0)