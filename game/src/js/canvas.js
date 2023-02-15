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
import panda from "../media/panda.png";
import mhm_logo from "../media/mhm_loho.png";
import heart from "../media/heart_game.png";
import bride from "../media/bride.png";
import marriage from "../media/marriage.png";
import group_without_player from "../media/Group_without.png";
import group_with_player from "../media/Group_with.png";

if (screen.width <= 850) {
  var banner = document.createElement("div");
  banner.innerHTML =
    "Looks life you are using a mobile device. You can play this game only on devices with keyboard support. Sorry :(";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.background = "#f2f2f2";
  banner.style.padding = "10px";
  banner.style.textAlign = "center";
  banner.style.zIndex = "9999";
  document.body.appendChild(banner);
}

//Setting up the canvas for the game
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//Device Support Prompt
//alert("The game works best on a device with keyboard support");

//Inputing the value of gravity
const gravity = 0.5;

function lose_messages() {
  let num = Math.random();

  if (num > 0.5) {
    return "Apne hi chamach se khode hue ghadde mai gir gaya";
  } else {
    return "Aur ghoomo Kheer Ganga!!";
  }
}

function marriage_messages() {
  let num = Math.random();

  if (num > 0.5) {
    return "Mubarak ho SHAADI ke liye";
  } else {
    return "Football team banayega ab Bhati yoga room mai";
  }
}

var lose_message = lose_messages();
var marriage_message = marriage_messages();
console.log(lose_message);
console.log(marriage_message);

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
      enemy.position.x -= player.speed * 0.1;
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

//Creating Powerups/down
class PowerSource {
  constructor({ x, y, image, effect, width, height }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = width;
    this.height = height;
    this.effect = effect;
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

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

//Creating Enemy Traits
class Enemy {
  constructor({ x, y, image, width, height }) {
    this.position = { x, y };
    this.image = image;
    this.width = width;
    this.height = height;
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
let PowerSources = [];
var marriage_audio = true;
var group_audio = true;

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
  marriage_audio = true;
  group_audio = true;
  platformImage = createImage(platform_pic);
  player = new Player();
  enemies = [
    new Enemy({
      x: 1544,
      y: 350,
      image: createImage(enemy1),
      width: 100,
      height: 130,
    }),
    new Enemy({
      x: 3028,
      y: 350,
      image: createImage(enemy2),
      width: 100,
      height: 130,
    }),
    new Enemy({
      x: 5520,
      y: 350,
      image: createImage(enemy1),
      width: 100,
      height: 130,
    }),
    new Enemy({
      x: 7232,
      y: 300,
      image: createImage(panda),
      width: 200,
      height: 230,
    }),
  ];
  PowerSources = [
    new PowerSource({
      x: 12094,
      y: 400,
      image: createImage(heart),
      effect: "powerDown",
      width: 70,
      height: 70,
    }),
    new PowerSource({
      x: 12888,
      y: 208,
      image: createImage(mhm_logo),
      effect: "powerUp",
      width: 70,
      height: 70,
    }),
    new PowerSource({
      x: 14300,
      y: 325,
      image: createImage(bride),
      effect: "bride",
      width: 120,
      height: 150,
    }),
    new PowerSource({
      x: 15702, //15310
      y: 210,
      image: createImage(group_without_player),
      effect: "group",
      width: 230,
      height: 300,
    }),
    new PowerSource({
      x: 0, //15310
      y: 5000,
      image: createImage(group_with_player),
      effect: "group",
      width: 230,
      height: 300,
    }),
    new PowerSource({
      x: 0,
      y: 5000,
      image: createImage(marriage),
      effect: "bride",
      width: 120,
      height: 150,
    }),
  ];
  platforms = [
    new Platform({
      x: platformImage.width * 5 + 220, // 1st Elevated platform/4th platform
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x: platformImage.width * 10 + 200, // 2nd Elevated platform/7th platform
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x: platformImage.width * 15 + 200, // 3rd Elevated platform/10th platform
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x: platformImage.width * 22 + 20, // 4th Elevated platform/15th platform
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({ x: -1, y: 470, image: platformImage }), // 1st platform
    new Platform({
      x: platformImage.width - 3, // 1st platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100, // 2nd platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3, // 2nd platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 200, // 3rd platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 6 + 200, // 5th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 8 - 10, // 6th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 9 - 11, // 6th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 11 + 200, // 8th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 12 + 199, // 8th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 14, // 9th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 16 + 50, // 11th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 17 - 51, // 11th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 18 + 40, // 12th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 20 - 47, // 13th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 21 - 47, // 13th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 23 + 30, // 15th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 24 + 90, // 16th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 26, // 16th + 1 platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 27 - 45, // 17th platform
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 28 - 55, //17th platform/Finish line
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
  PowerSources.forEach((PowerSource) => {
    PowerSource.draw();
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
    PowerSources.forEach((powerSource) => {
      powerSource.position.x -= player.speed;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed;
    platforms.forEach((platform) => {
      platform.position.x += player.speed;
    });
    genericObjects.forEach((genericObject) => {
      genericObject.position.x += player.speed * 0.66;
    });
    PowerSources.forEach((powerSource) => {
      powerSource.position.x += player.speed;
    });
  }
  if (keys.right.pressed) {
    enemies.forEach((enemy) => {
      enemy.position.x -= player.speed * 0.6;
    });
  }
  var message = "";
  var death_message = "";
  let element = document.getElementById("bonus-text");
  element.innerHTML = "";
  if (keys.left.pressed && scrollOffset == 0) {
    message = "Life mai hamesha aage badhne ka chotte!!";
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
    } else if (
      player.position.x + player.width >= enemy.position.x &&
      player.position.x <= enemy.position.x + enemy.width &&
      player.position.y + player.height + player.velocity.y >= enemy.position.y
    ) {
      console.log(enemy.height);
      if (enemy.height != 10) {
        init();
      }
    }
  });

  let play_sound = "false";

  function play(link) {
    var audio = new Audio(link);
    audio.play();
    audio.volume = 0.1;
    audio.loop = false;
  }

  //Power Source encounter
  PowerSources.forEach((powerSource) => {
    if (
      player.position.x + player.width >= powerSource.position.x &&
      player.position.x <= powerSource.position.x + powerSource.width &&
      player.position.y + player.height + player.velocity.y >=
        powerSource.position.y
    ) {
      console.log("power source hit");

      if (powerSource.effect == "powerDown") {
        death_message = "Pyaar vyaar sab moh maya hai";
        setTimeout(init, 2200);
      } else if (powerSource.effect == "powerUp") {
        message = "Ma'am se milke zyada hi khush ho gaya <3";
        element.innerHTML = "Subscribe to Maths hi Maths";
        element.href = "https://www.youtube.com/@mathshimaths";
      } else if (powerSource.effect == "bride") {
        powerSource.image = createImage(marriage);
        message = marriage_message;
        play_sound = "marriage";
      } else if (powerSource.effect == "group") {
        play_sound = "group";
        //win condition
        if (scrollOffset > 15324) {
          message =
            "Chahe jo ho jaye akhir final destination toh Nasshediyo ka Adda hi hai";
          powerSource.image = createImage(group_with_player);
          powerSource.width = 500;
          powerSource.height = 350;
          player.currentCropWidth = 0;
          player.speed = 0;
          element.innerHTML = "Press Spacebar to play again";
          element.href = "javascript:location.reload()";
          document.body.onkeyup = function (e) {
            if (e.keyCode == 32) {
              location.reload();
            }
          };
        }
      }
    }
  });

  if (play_sound == "marriage" && marriage_audio == true) {
    play(
      "https://firebasestorage.googleapis.com/v0/b/storage-for-projects-d003c.appspot.com/o/game_src_media_marriage_sound.mp3?alt=media&token=d10a2cc4-c158-419f-bc75-bbba711081da"
    );
    marriage_audio = false;
  } else if (play_sound == "group" && group_audio == true) {
    play(
      "https://firebasestorage.googleapis.com/v0/b/storage-for-projects-d003c.appspot.com/o/2023-01-09-153544-0hxsfl0d_kCIcpwuZ.mp3?alt=media&token=b20f08ae-1be1-448f-8914-9501778ac3f6"
    );
    group_audio = false;
  }

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
  // Points scored by player
  let points_player = scrollOffset;

  //lose condition

  if (player.position.y > canvas.height) {
    message = lose_message;
    console.log(message);
    setTimeout(init, 2000);
  }

  //message = "You scored " + last_game_score.slice(-1) + "in the last game!";
  document.getElementById("points").innerHTML = "Points:" + points_player;
  document.getElementById("message").innerHTML = message;
  document.getElementById("lose_message").innerHTML = death_message;
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
