/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/platform.png */ "./src/media/platform.png");
/* harmony import */ var _media_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/hills.png */ "./src/media/hills.png");
/* harmony import */ var _media_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/background.png */ "./src/media/background.png");
/* harmony import */ var _media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/platformSmallTall.png */ "./src/media/platformSmallTall.png");
/* harmony import */ var _media_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/spriteStandLeft.png */ "./src/media/spriteStandLeft.png");
/* harmony import */ var _media_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/spriteStandRight.png */ "./src/media/spriteStandRight.png");
/* harmony import */ var _media_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/spriteRunLeft.png */ "./src/media/spriteRunLeft.png");
/* harmony import */ var _media_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/spriteRunRight.png */ "./src/media/spriteRunRight.png");
/* harmony import */ var _media_enemy1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/enemy1.png */ "./src/media/enemy1.png");
/* harmony import */ var _media_enemy2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/enemy2.png */ "./src/media/enemy2.png");
/* harmony import */ var _media_panda_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/panda.png */ "./src/media/panda.png");
/* harmony import */ var _media_mhm_loho_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../media/mhm_loho.png */ "./src/media/mhm_loho.png");
/* harmony import */ var _media_heart_game_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../media/heart_game.png */ "./src/media/heart_game.png");
/* harmony import */ var _media_bride_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../media/bride.png */ "./src/media/bride.png");
/* harmony import */ var _media_marriage_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../media/marriage.png */ "./src/media/marriage.png");
/* harmony import */ var _media_Group_without_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/Group_without.png */ "./src/media/Group_without.png");
/* harmony import */ var _media_Group_with_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../media/Group_with.png */ "./src/media/Group_with.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Importing media
















 //Setting up the canvas for the game

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576; //Device Support Prompt
//alert("The game works best on a device with keyboard support");
//Inputing the value of gravity

var gravity = 0.5;

function lose_messages() {
  var num = Math.random();

  if (num > 0.5) {
    return "Apne hi chamach se khode hue ghadde mai gir gaya";
  } else {
    return "Aur ghoomo Kheer Ganga!!";
  }
}

function marriage_messages() {
  var num = Math.random();

  if (num > 0.5) {
    return "Mubarak ho SHAADI ke liye";
  } else {
    return "Football team banayega ab Bhati yoga room mai";
  }
}

var lose_message = lose_messages();
var marriage_message = marriage_messages();
console.log(lose_message);
console.log(marriage_message); //Creating Player traits

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 8;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_media_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_media_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_media_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_media_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_media_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  } //Drawing Player on Canvas


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }

      enemies.forEach(function (enemy) {
        enemy.position.x -= player.speed * 0.1;
      });
    }
  }]);

  return Player;
}(); //Creating Platform traits


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); //Creating Game Images(Background)


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); //Creating Powerups/down


var PowerSource = /*#__PURE__*/function () {
  function PowerSource(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
        effect = _ref3.effect,
        width = _ref3.width,
        height = _ref3.height;

    _classCallCheck(this, PowerSource);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = width;
    this.height = height;
    this.effect = effect;
  }

  _createClass(PowerSource, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return PowerSource;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //Creating Enemy Traits


var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image,
        width = _ref4.width,
        height = _ref4.height;

    _classCallCheck(this, Enemy);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = width;
    this.height = height;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Enemy;
}();

var platformImage = createImage(_media_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var enemies = [];
var PowerSources = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; //Drawing objects on the canvas

var scrollOffset = 0;

function init() {
  platformImage = createImage(_media_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  enemies = [new Enemy({
    x: 1544,
    y: 350,
    image: createImage(_media_enemy1_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
    width: 100,
    height: 130
  }), new Enemy({
    x: 3028,
    y: 350,
    image: createImage(_media_enemy2_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
    width: 100,
    height: 130
  }), new Enemy({
    x: 5520,
    y: 350,
    image: createImage(_media_enemy1_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
    width: 100,
    height: 130
  }), new Enemy({
    x: 7232,
    y: 300,
    image: createImage(_media_panda_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
    width: 200,
    height: 230
  })];
  PowerSources = [new PowerSource({
    x: 12094,
    y: 400,
    image: createImage(_media_heart_game_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
    effect: "powerDown",
    width: 70,
    height: 70
  }), new PowerSource({
    x: 12888,
    y: 208,
    image: createImage(_media_mhm_loho_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
    effect: "powerUp",
    width: 70,
    height: 70
  }), new PowerSource({
    x: 14300,
    y: 325,
    image: createImage(_media_bride_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
    effect: "bride",
    width: 120,
    height: 150
  }), new PowerSource({
    x: 15702,
    //15310
    y: 210,
    image: createImage(_media_Group_without_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
    effect: "group",
    width: 230,
    height: 300
  })];
  platforms = [new Platform({
    x: platformImage.width * 5 + 220,
    // 1st Elevated platform/4th platform
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 10 + 200,
    // 2nd Elevated platform/7th platform
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 15 + 200,
    // 3rd Elevated platform/10th platform
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 22 + 20,
    // 4th Elevated platform/15th platform
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), // 1st platform
  new Platform({
    x: platformImage.width - 3,
    // 1st platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    // 2nd platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3,
    // 2nd platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 200,
    // 3rd platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 200,
    // 5th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 - 10,
    // 6th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 - 11,
    // 6th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 200,
    // 8th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 199,
    // 8th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14,
    // 9th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 16 + 50,
    // 11th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 17 - 51,
    // 11th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 18 + 40,
    // 12th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 20 - 47,
    // 13th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 21 - 47,
    // 13th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 23 + 30,
    // 15th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 24 + 90,
    // 16th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 26,
    // 16th + 1 platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 27 - 45,
    // 17th platform
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 28 - 55,
    //17th platform/Finish line
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_media_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_media_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
} //building game


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  enemies.forEach(function (enemy) {
    enemy.draw();
  });
  PowerSources.forEach(function (PowerSource) {
    PowerSource.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset == 0 && player.position.x > 0) {
    player.velocity.x -= player.speed;
  } else player.velocity.x = 0;

  if (keys.right.pressed) {
    scrollOffset += player.speed;
    platforms.forEach(function (platform) {
      platform.position.x -= player.speed;
    });
    genericObjects.forEach(function (genericObject) {
      genericObject.position.x -= player.speed * 0.66;
    });
    PowerSources.forEach(function (powerSource) {
      powerSource.position.x -= player.speed;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed;
    platforms.forEach(function (platform) {
      platform.position.x += player.speed;
    });
    genericObjects.forEach(function (genericObject) {
      genericObject.position.x += player.speed * 0.66;
    });
    PowerSources.forEach(function (powerSource) {
      powerSource.position.x += player.speed;
    });
  }

  if (keys.right.pressed) {
    enemies.forEach(function (enemy) {
      enemy.position.x -= player.speed * 0.6;
    });
  }

  var message = "";
  var death_message = "";
  var element = document.getElementById("bonus-text");
  element.innerHTML = "";

  if (keys.left.pressed && scrollOffset == 0) {
    message = "Life mai hamesha aage badhne ka chotte!!";
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //enemy encounter

  enemies.forEach(function (enemy) {
    if (player.position.y + player.height <= enemy.position.y && player.position.y + player.height + player.velocity.y >= enemy.position.y && player.position.x + player.width >= enemy.position.x && player.position.x <= enemy.position.x + enemy.width) {
      enemy.height = 10;
      enemy.position.y = 460;
    } else if (player.position.x + player.width >= enemy.position.x && player.position.x <= enemy.position.x + enemy.width && player.position.y + player.height + player.velocity.y >= enemy.position.y) {
      console.log(enemy.height);

      if (enemy.height != 10) {
        init();
      }
    }
  });
  var play_sound = "false";

  function play(link) {
    var audio = new Audio(link);
    audio.play();
    audio.volume = 0.1;
    audio.loop = false;
  } //Power Source encounter


  PowerSources.forEach(function (powerSource) {
    if (player.position.x + player.width >= powerSource.position.x && player.position.x <= powerSource.position.x + powerSource.width && player.position.y + player.height + player.velocity.y >= powerSource.position.y) {
      console.log("power source hit");

      if (powerSource.effect == "powerDown") {
        death_message = "Pyaar vyaar sab moh maya hai";
        setTimeout(init, 2200);
      } else if (powerSource.effect == "powerUp") {
        message = "Ma'am se milke zyada hi khush ho gaya <3";
        element.innerHTML = "Subscribe to Maths hi Maths";
        element.href = "https://www.youtube.com/@mathshimaths";
      } else if (powerSource.effect == "bride") {
        powerSource.image = createImage(_media_marriage_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
        message = marriage_message;
        play_sound = "marriage";
      } else if (powerSource.effect == "group") {
        //win condition
        if (scrollOffset > 15324) {
          message = "Chahe jo ho jaye akhir final destination toh Nasshediyo ka Adda hi hai";
          powerSource.image = createImage(_media_Group_with_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
          powerSource.width = 500;
          powerSource.height = 350;
          player.currentCropWidth = 0;
          player.speed = 0;
          play_sound = "group";
        }
      }
    }
  });

  if (play_sound == "marriage") {
    setTimeout(play("https://firebasestorage.googleapis.com/v0/b/storage-for-projects-d003c.appspot.com/o/game-src-media-marriage-sound_gzK6Ajb8.mp3?alt=media&token=8366692c-3a4b-420d-82a7-1b482a526252"), 200);
  } // else if (play_sound == "group") {
  //   setTimeout(
  //     play(
  //       "https://firebasestorage.googleapis.com/v0/b/storage-for-projects-d003c.appspot.com/o/2023-01-09-153544-0hxsfl0d_kCIcpwuZ.mp3?alt=media&token=b20f08ae-1be1-448f-8914-9501778ac3f6"
  //     ),
  //     200
  //   );
  // }
  //sprite switching


  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } // Points scored by player


  var points_player = scrollOffset; //lose condition

  if (player.position.y > canvas.height) {
    message = lose_message;
    console.log(message);
    setTimeout(init, 2000);
  } //message = "You scored " + last_game_score.slice(-1) + "in the last game!";


  document.getElementById("points").innerHTML = "Points:" + points_player;
  document.getElementById("message").innerHTML = message;
  document.getElementById("lose_message").innerHTML = death_message;
}

init();
animate();
window.addEventListener("keydown", function (_ref5) {
  var keyCode = _ref5.keyCode;

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
window.addEventListener("keyup", function (_ref6) {
  var keyCode = _ref6.keyCode;

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

/***/ }),

/***/ "./src/media/Group_with.png":
/*!**********************************!*\
  !*** ./src/media/Group_with.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b9ba6c8e8e196e91669d77a599295a46.png");

/***/ }),

/***/ "./src/media/Group_without.png":
/*!*************************************!*\
  !*** ./src/media/Group_without.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "540c33c6db0c8837e957a70979dd3eae.png");

/***/ }),

/***/ "./src/media/background.png":
/*!**********************************!*\
  !*** ./src/media/background.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b307482b6e5605e2155cc52cb57029fc.png");

/***/ }),

/***/ "./src/media/bride.png":
/*!*****************************!*\
  !*** ./src/media/bride.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de9c230215f33a1192fe6ca4c2c52a44.png");

/***/ }),

/***/ "./src/media/enemy1.png":
/*!******************************!*\
  !*** ./src/media/enemy1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f8c3488f93ba3a377d9b02e0372fa1fd.png");

/***/ }),

/***/ "./src/media/enemy2.png":
/*!******************************!*\
  !*** ./src/media/enemy2.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "016bb13f6ce7aced91b5a88a5690408e.png");

/***/ }),

/***/ "./src/media/heart_game.png":
/*!**********************************!*\
  !*** ./src/media/heart_game.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8ad841a67fe4c9730087090cdc3575a.png");

/***/ }),

/***/ "./src/media/hills.png":
/*!*****************************!*\
  !*** ./src/media/hills.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/media/marriage.png":
/*!********************************!*\
  !*** ./src/media/marriage.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ace870be108854533bbbedd9dc51202b.png");

/***/ }),

/***/ "./src/media/mhm_loho.png":
/*!********************************!*\
  !*** ./src/media/mhm_loho.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85c37a877a4444612c9505ab4114b1fe.png");

/***/ }),

/***/ "./src/media/panda.png":
/*!*****************************!*\
  !*** ./src/media/panda.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7c5578a0c735372cd6dc7c76b6c398a7.png");

/***/ }),

/***/ "./src/media/platform.png":
/*!********************************!*\
  !*** ./src/media/platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe1aba0ecf84504585dc49143aa84eba.png");

/***/ }),

/***/ "./src/media/platformSmallTall.png":
/*!*****************************************!*\
  !*** ./src/media/platformSmallTall.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a14ae24271decd9489aa44ad2a7c24ab.png");

/***/ }),

/***/ "./src/media/spriteRunLeft.png":
/*!*************************************!*\
  !*** ./src/media/spriteRunLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9bf195223fbd4c9e8696e0d4101f68a0.png");

/***/ }),

/***/ "./src/media/spriteRunRight.png":
/*!**************************************!*\
  !*** ./src/media/spriteRunRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3515ddd2dbe311e36c6fa50754ddb1d9.png");

/***/ }),

/***/ "./src/media/spriteStandLeft.png":
/*!***************************************!*\
  !*** ./src/media/spriteStandLeft.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed48483983a71421fd95bb7dbf31a11a.png");

/***/ }),

/***/ "./src/media/spriteStandRight.png":
/*!****************************************!*\
  !*** ./src/media/spriteStandRight.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63f1c504ef76edbd4bdd10b16efea27a.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map