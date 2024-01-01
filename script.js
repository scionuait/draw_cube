let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

function translateToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomAngle(min, max) {
  let degrees = getRandomArbitrary(min, max);
  return translateToRadians(degrees);
}


function draw() {
  let x = 200;
  let y = 200;

  let angle = getRandomAngle(0, 120);
  let angleSum = angle;

  for (let i = 0; i < 3; ++i) {
    let length = getRandomArbitrary(50, 190);
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.cos(angleSum), y + length * Math.sin(angleSum));
    ctx.stroke();

    angle = getRandomAngle(angleSum + 90, angleSum + 120);
    angleSum += angle;
  }
}

document.getElementById("refresh-button").addEventListener("click", () => {
  let canvas = document.getElementById("myCanvas");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  draw();
});

draw();

document.getElementById("current-year").innerText = new Date().getFullYear();