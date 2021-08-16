var canvas;
var offset_x;
var offset_y;
var width;
var height;
var ctx;
var towers;
var num_moves;
var num_disks;

const kLineWidth = 10;
const kDiskWidth = 15;
const kMaxDisks = 20;
const kMinDiskWidth = 50;

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
  num_disks = 3;

  reset();
  draw();
}

function reset() {
 towers = [[], [], []];
 num_moves = 0;
 createDisks();
}

function incrementNumDisks() {
  if (num_disks && num_disks < kMaxDisks) {
    num_disks++;
  }
  reset();
  draw();
}

function decrementNumDisks() {
  if (num_disks && num_disks > 2) {
    num_disks--;
  }
  reset();
  draw();
}

function createDisks() {
  for (let i = num_disks - 1; i >= 0; i--) {
    var disk_width = i * ((width / 4) - kMinDiskWidth) / 
                     num_disks + kMinDiskWidth;
    towers[0].push({
      index: i,
      rod: 0,
      width: disk_width,
      height: kDiskWidth,
      color: `hsl(${30 * i}, 90%, 60%)`
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawRodsAndDisks();
}

function drawRodsAndDisks() {
  const kBaseWidth = width / 4;
  const kBaseSeparator = width / 16;
  const kRodHeight = height / 2;

  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = "#000000";
    var pos_x = (i + 1) * kBaseSeparator + i * kBaseWidth
    ctx.fillRect( // Draw the base
      pos_x,
      height - 2 * kLineWidth,
      kBaseWidth,
      kLineWidth
    );
    ctx.fillRect( // Draw the rod
      pos_x + (kBaseWidth / 2) - (kLineWidth / 2),
      height - 2 * kLineWidth - kRodHeight,
      kLineWidth,
      kRodHeight
    )

    for (let j = 0; j < towers[i].length; j++) {
      ctx.fillStyle = towers[i][j].color;
      console.log(towers[i][j].color);
      ctx.fillRect(
        pos_x + kBaseWidth / 2 - towers[i][j].width / 2,
        height - 2 * kLineWidth - (j + 1) * kDiskWidth,
        towers[i][j].width,
        towers[i][j].height
      )
    }
  }
}

function handleUIEvent(e) {

}