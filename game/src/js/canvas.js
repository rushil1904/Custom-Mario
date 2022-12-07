// Importing media
import platform_pic from "../media/platform.png";
import hills from "../media/hills.png";
import background from "../media/background.png";
import platformSmallTall from "../media/platformSmallTall.png";
import spriteStandLeft from "../media/spriteStandLeft.png";
import spriteStandRight from "../media/spriteStandRight.png";
import spriteRunLeft from "../media/spriteRunLeft.png";
import spriteRunRight from "../media/spriteRunRight.png";
import enemy1 from "../media/enemy1.png";
import enemy2 from "../media/enemy2.png";

//Setting up the canvas for the game
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//Device Support Prompt
//alert("The game works best on a device with keyboard support");

//Inputing the value of gravity
const gravity = 0.5;

//Creating Player traits
class Player {
  constructor() {
    this.speed = 8;
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(spriteStandRight);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
        cropWidth: 341,
        width: 127.875,
      },
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  //Drawing Player on Canvas
  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.frames++;
    if (
      (this.frames > 59 && this.currentSprite === this.sprites.stand.right) ||
      this.currentSprite === this.sprites.stand.left
    )
      this.frames = 0;
    else if (
      this.frames > 29 &&
      (this.currentSprite === this.sprites.run.right ||
        this.currentSprite === this.sprites.run.left)
    )
      this.frames = 0;
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
    enemies.forEach((enemy) => {
      enemy.position.x -= 1;
    });
  }
}

//Creating Platform traits
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

//Creating Game Images(Background)
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

//Creating Enemy Traits
class Enemy {
  constructor({ x, y, image }) {
    this.position = { x, y };
    this.image = image;
    this.width = 100;
    this.height = 130;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

let platformImage = createImage(platform_pic);
let player = new Player();
let platforms = [];
let genericObjects = [];
let enemies = [];
let enemy_pic = createImage(enemy1);
let lastKey;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

//Drawing objects on the canvas
let scrollOffset = 0;
function init() {
  platformImage = createImage(platform_pic);
  player = new Player();
  enemies = [
    new Enemy({
      x: 500,
      y: 350,
      image: createImage(enemy1),
    }),
  ];
  platforms = [
    new Platform({
      x: platformImage.width * 5 + 200,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x: platformImage.width * 10 + 200,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x: platformImage.width * 15 + 200,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({ x: -1, y: 470, image: platformImage }),
    new Platform({
      x: platformImage.width - 3,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 200,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 6 + 200,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 8 - 10,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 9 - 11,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 11 + 200,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 12 + 199,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 14,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 16 + 50,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 17 - 51,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 18 + 50,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 19 + 49,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 20 + 47,
      y: 470,
      image: platformImage,
    }),
  ];
  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(background),
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(hills),
    }),
  ];

  scrollOffset = 0;
}

//building game
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  enemies.forEach((enemy) => {
    enemy.draw();
  });

  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset == 0 && player.position.x > 0)
  ) {
    player.velocity.x -= player.speed;
  } else player.velocity.x = 0;

  if (keys.right.pressed) {
    scrollOffset += player.speed;
    platforms.forEach((platform) => {
      platform.position.x -= player.speed;
    });
    genericObjects.forEach((genericObject) => {
      genericObject.position.x -= player.speed * 0.66;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed;
    platforms.forEach((platform) => {
      platform.position.x += player.speed;
    });
    genericObjects.forEach((genericObject) => {
      genericObject.position.x += player.speed * 0.66;
    });
  }
  if (keys.right.pressed) {
    enemies.forEach((enemy) => {
      enemy.position.x -= player.speed * 0.6;
    });
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //enemy encounter
  enemies.forEach((enemy) => {
    if (
      player.position.y + player.height <= enemy.position.y &&
      player.position.y + player.height + player.velocity.y >=
        enemy.position.y &&
      player.position.x + player.width >= enemy.position.x &&
      player.position.x <= enemy.position.x + enemy.width
    ) {
      enemy.height = 10;
      enemy.position.y = 460;
    }
  });

  //sprite switching
  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  //win condition
  if (scrollOffset > 6000) {
    console.log("You win!");
  }
  //lose condition
  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 87:
      console.log("up");
      player.velocity.y -= 25;
      break;
  }
});
window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      player.velocity.y += 20;
      break;
  }
});
