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

// hill
var hillHeight = 750;
var hillWidth = canvas.clientWidth;


c.beginPath();
c.moveTo(305, canvas.clientHeight);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(650, -50, 1000, canvas.clientHeight);
c.fillStyle = '#8CC84B'; // Greenish color for the hill
c.fill();

// back hill #2
c.beginPath();
c.moveTo(600, 700);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(900, -50, canvas.clientWidth, 400);
c.lineTo(canvas.clientHeight, canvas.clientWidth);
c.fillStyle = 'darkgreen'; // Greenish color for the hill
c.fill();

// hill
var hillHeight = 750;
var hillWidth = canvas.clientWidth;


c.beginPath();
c.moveTo(305, canvas.clientHeight);
// 450 450 1200 700
// c.quadraticCurveTo(canvas.clientWidth / 2, canvas.clientHeight - hillHeight, canvas.clientWidth, canvas.clientHeight);
c.quadraticCurveTo(650, -50, 1000, canvas.clientHeight);
c.fillStyle = '#8CC84B'; // Greenish color for the hill
c.fill();



//sun
c.beginPath();
c.moveTo(75, 50)
c.arc(60, 65, 5, 0, Math.PI * 2, true)
c.fillStyle = '#FFD700'; // Yellow color for the sun
c.fill();


// background
c.globalCompositeOperation = 'destination-over'
c.fillStyle = "skyblue";
c.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
c.fillRect(25, 25, 100, 100);



