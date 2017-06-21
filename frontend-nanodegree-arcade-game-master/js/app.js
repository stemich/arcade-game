// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
      this.x = 0;
      this.speed = 100 + (this.speed * Math.random());
    };
   };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.




var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 450;

    };






Player.prototype.handleInput = function(movement) {
    if (movement === "up") {this.y -=  40;};
    if (movement === "left") {this.x -=  50;};
    if (movement === "down") {this.y +=  40;};
    if (movement === "right") {this.x +=  50;};
  };

Player.prototype.update = function(dt) {
    if (this.x > 400) {
      this.x = 400;};
    if (this.x < 0) {
      this.x = 0;};
    if (this.y > 400) {
      this.y = 400;};
    if (this.y < -20) {
      this.y = -20;};

      allEnemies.forEach
      (function(val)
      {
            if(val.x <= (player.x + 32) && player.x <= (val.x + 32) && val.y <= (player.y + 32) && player.y <= (val.y + 32))
            {


              lost();
              textLost();
              reset();

            };


          } );

          if (this.y < 0) {lost();
          textWon();
          reset(); }

};





Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var enemy1 = new Enemy(65, 150);
var enemy2 = new Enemy(150, 200);
var enemy3 = new Enemy(225, 175);


var allEnemies = [enemy1, enemy2, enemy3];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var lost = function() {

  allEnemies.forEach (function(val)
    {val.speed = 0;});

  };

var textLost = function () {

var step, steps = 0,
              delay = 20;

        function init() {
          Layer2 = document.getElementById('Layer2');
          canvasContext = Layer2.getContext('2d');

          canvasContext.font = "32pt Impact";
          canvasContext.textBaseline = "top";
          canvasContext.textAlign = "center";

          canvasContext.strokeStyle = "black";
          canvasContext.lineWidth = 3;

          canvasContext.fillStyle = 'white';


            step = 0;
            steps = Layer2.height + 5;
            RunTextRightToLeft();
        }

        function RunTextRightToLeft() {
            step++;
            canvasContext.clearRect(0, 0, Layer2.width, Layer2.height);
            canvasContext.save();
            canvasContext.translate(Layer2.width / 2, step);
            canvasContext.fillText("Try again...", 0, 0);
            canvasContext.restore();
            if (step == steps)
                {step = 0;};
            if (step < steps)
                {var t = setTimeout(RunTextRightToLeft(), delay);};
        };

};


var textWon = function () {

    function drawText() {

var Layer2 = document.getElementById('Layer2');
var canvasContext = Layer2.getContext('2d');

    canvasContext.font = "32pt Impact";
    canvasContext.textBaseline = "top";
    canvasContext.textAlign = "center";

    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 3;

    canvasContext.fillStyle = 'white';
    canvasContext.strokeText("You won - gratulations!", Layer2.width / 2, 390);
    canvasContext.fillText("You won - gratulations!", Layer2.width/2, 390);

    canvasContext.font = "16pt Impact";
    canvasContext.textBaseline = "top";
    canvasContext.textAlign = "center";

    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 1;

    canvasContext.fillStyle = 'white';

    canvasContext.strokeText("Press space to restart", Layer2.width / 2, 430);
    canvasContext.fillText("Press space to restart", Layer2.width/2, 430);
  };
drawText();

};



var reset = function()
    {Player.prototype.handleInput = function(movement) {
    if (movement === "space") {location.reload();};
    };
  };
