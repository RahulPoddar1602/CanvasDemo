const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//fillRect()
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

//strokeRect()
//clearRect()
//fillText()
//strokeText()

// Path: script.js
// ctx.beginPath()
// ctx.moveTo(50, 50);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 10);
// ctx.closePath();
// ctx.stroke()
// ctx.fill()

// ctx.beginPath()
// ctx.rect(300,10,100,100)
// ctx.fill()

// ctx.beginPath()
//x and y of arc are center  
// ctx.arc(canvas.width/2,canvas.height/2,40,0,Math.PI*2,true)//true /false for clockwise or anticlockwise
// ctx.moveTo()//for going to other side
// ctx.stroke()

// Animation 1
 const circle={
    x:200,
    y:200,
    size:30,//radius
    dx:5,//increment in terms of x-axis
    dy:4//increment in terms of y-axis
 }
    function drawCircle(){
        ctx.beginPath()
        ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2)
        ctx.fillStyle="purple"
        ctx.fill()
    }
    function update(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        drawCircle()
        //change position
        circle.x+=circle.dx
        circle.y+=circle.dy
        //detect side walls
        if(circle.x+circle.size>canvas.width || circle.x-circle.size<0){
            circle.dx*=-1
        }
        //detect top and bottom walls
        if(circle.y+circle.size>canvas.height || circle.y-circle.size<0){
            circle.dy*=-1
        }
        requestAnimationFrame(update)
    }
    update();
    // ctx.drawImage()