var canvas;
var offset_x;
var offset_y;
var width;
var height;
var ctx;
var towers = [[], [], []];
var num_moves;
var num_disks;

const kLineWidth = 10;


function init() {
  window.addEventListener('mousedown', this.handleUIEvent, false);
  window.addEventListener('mouseup', this.handleUIEvent, false);
  window.addEventListener('touchmove', this.handleUIEvent, false);
  canvas = document.getElementById('toh');
  width = canvas.width;
  height = canvas.height;
  offset_x = canvas.offsetLeft;
  offset_y = canvas.offsetTop;
  ctx = canvas.getContext('2d');

  // for (let i = 0; i < num_disks; i++) {
  //   towers[0].push({
  //     index: i,
  //     x: asdf,
  //     y: asdf,
  //     width: asdf,
  //     height: asdf,
  //   });
  // }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawRods();
}

function drawRods() {
  ctx.fillStyle = '#000000';
  const kBaseWidth = width / 4;
  const kBaseSeparator = width / 16;
  const kRodHeight = height / 2;

  for (let i = 0; i < 3; i++) {
    var pos_x = (i + 1) * kBaseSeparator + i * kBaseWidth
    ctx.fillRect(
      pos_x,
      height - 2 * kLineWidth,
      kBaseWidth,
      kLineWidth
    );
    ctx.fillRect(
      pos_x + (kBaseWidth / 2) - (kLineWidth / 2),
      height - 2 * kLineWidth - kRodHeight,
      kLineWidth,
      kRodHeight
    )
  }

}

function handleUIEvent(e) {

}