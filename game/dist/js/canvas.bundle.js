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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Importing media









 //Setting up the canvas for the game

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576; //Inputing the value of gravity

var gravity = 0.5;

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
  }

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
        enemy.position.x -= 1;
      });
    }
  }]);

  return Player;
}();

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
}();

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
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, Enemy);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = 100;
    this.height = 130;
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
var enemy_pic = createImage(_media_enemy1_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_media_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  enemies = [new Enemy({
    x: 500,
    y: 350,
    image: createImage(_media_enemy1_png__WEBPACK_IMPORTED_MODULE_8__["default"])
  })];
  platforms = [new Platform({
    x: platformImage.width * 5 + 200,
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 10 + 200,
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 15 + 200,
    y: 270,
    image: createImage(_media_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 200,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 200,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 - 10,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 - 11,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 200,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 199,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 16 + 50,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 17 - 51,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 18 + 50,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 19 + 49,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 20 + 47,
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
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed;
    platforms.forEach(function (platform) {
      platform.position.x += player.speed;
    });
    genericObjects.forEach(function (genericObject) {
      genericObject.position.x += player.speed * 0.66;
    });
  }

  if (keys.right.pressed) {
    enemies.forEach(function (enemy) {
      enemy.position.x -= player.speed * 0.6;
    });
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
    }
  }); //sprite switching

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
  } //win condition


  if (scrollOffset > 6000) {
    console.log("You win!");
  } //lose condition


  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
window.addEventListener("keydown", function (_ref4) {
  var keyCode = _ref4.keyCode;

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
window.addEventListener("keyup", function (_ref5) {
  var keyCode = _ref5.keyCode;

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

/***/ "./src/media/background.png":
/*!**********************************!*\
  !*** ./src/media/background.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/media/enemy1.png":
/*!******************************!*\
  !*** ./src/media/enemy1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c92b82416d73785021df24e475d04b8.png");

/***/ }),

/***/ "./src/media/enemy2.png":
/*!******************************!*\
  !*** ./src/media/enemy2.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f41d20c571f1e41c483a20216b4f3be.png");

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

/***/ "./src/media/platform.png":
/*!********************************!*\
  !*** ./src/media/platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/media/platformSmallTall.png":
/*!*****************************************!*\
  !*** ./src/media/platformSmallTall.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/media/spriteRunLeft.png":
/*!*************************************!*\
  !*** ./src/media/spriteRunLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a4a26914c98933e0ad9ba141c8de6f7.png");

/***/ }),

/***/ "./src/media/spriteRunRight.png":
/*!**************************************!*\
  !*** ./src/media/spriteRunRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "60ddf90fbf038ec78d7a4a4ae04725a7.png");

/***/ }),

/***/ "./src/media/spriteStandLeft.png":
/*!***************************************!*\
  !*** ./src/media/spriteStandLeft.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7bec6f7f86d9b10912fe51f2120db5f6.png");

/***/ }),

/***/ "./src/media/spriteStandRight.png":
/*!****************************************!*\
  !*** ./src/media/spriteStandRight.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8ebb3bdfdc56e7d05c7f4939f0c21181.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map