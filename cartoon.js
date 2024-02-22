var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

// canvas width: 1200 height: 700
// main hill
// c.beginPath();
// c.moveTo(75, 50);
// c.lineTo(100, 75);
// c.stroke();
// c.lineTo(100, 25);
// c.stroke();
// c.fill();


// back hill
c.beginPath();
c.moveTo(0, 400);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(200, -50, 700, canvas.clientHeight);
c.lineTo(0,700)
c.fillStyle = 'darkgreen'; // Greenish color for the hill
c.fill();

// // hill
// var hillHeight = 750;
// var hillWidth = canvas.clientWidth;


// c.beginPath();
// c.moveTo(305, canvas.clientHeight);
// // 450 450 1200 700
// // c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
// c.quadraticCurveTo(650, -50, 1000, canvas.clientHeight);
// c.fillStyle = '#8CC84B'; // Greenish color for the hill
// c.fill();

// back hill #2
c.beginPath();
c.moveTo(600, 700);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(900, -50, canvas.clientWidth, 400);
c.lineTo(1200, 700);

c.fillStyle = 'darkgreen'; // Greenish color for the hill
c.fill();

// main hill
var hillHeight = 750;
var hillWidth = canvas.clientWidth;


c.beginPath();
c.moveTo(305, canvas.clientHeight);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(650, -50, 1000, canvas.clientHeight);
c.fillStyle = '#8CC84B'; // Greenish color for the hill
c.fill();



// //sun
// c.beginPath();
// c.moveTo(75, 50)
// c.arc(60, 65, 100, 0, Math.PI * 2, true)
// c.fillStyle = '#FFD700'; // Yellow color for the sun
// c.fill();


// cloud
const drawGrayCloud = (x, y) => {
    c.beginPath();
    c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 60);
    c.lineTo(x, y + 60);
    c.fillStyle = 'gray';
    c.fill()
}

const drawDarkCloud = (x, y) => {
    c.beginPath();
    c.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 60);
    c.lineTo(x, y + 60);
    c.fillStyle = 'darkgray';
    c.fill()
}



let startX = 50;
let startY = 100;
let startX2 = 200;
let startY2 = 150;
for (let i=0; i<4; i++) {
    drawGrayCloud(startX,startY);
    drawDarkCloud(startX2,startY2);
    startX += 350;
    startX2 += 350;
}

// lightning


const drawLightning = (context, x, y) => {
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(x, y);
    context.lineTo(x - 50, y + 50);
    context.lineTo(x, y + 50);
    context.lineTo(x - 50, y + 100);
    context.lineTo(x + 10, y + 100);
    context.lineTo(x - 50, y + 250);
    context.moveTo(x - 5, y + 150);
    context.lineTo(x + 50, y + 150);
    context.lineTo(x, y + 350);
    context.strokeStyle = "yellow";
    context.stroke();
}

drawLightning(c, 100, 150);
drawLightning(c, 800, 150);
drawLightning(c, 1000, 150);
// c.beginPath();
// c.lineWidth = 5;
// c.moveTo(100,100);
// c.lineTo(50, 150);
// c.lineTo(100,150);
// c.lineTo(50, 200);
// c.lineTo(110, 200);
// c.lineTo(50, 350);
// c.moveTo(95, 250);
// c.lineTo(150, 250);
// c.lineTo(100, 450);

// c.strokeStyle = "yellow";
// c.stroke();





// background
c.globalCompositeOperation = 'destination-over'
c.fillStyle = "darkblue";
c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
c.fillRect(25, 25, 100, 100);



