import {drawCircle} from "../mixin.js";

let BallFactory = function (context, x, y, speed, velocityX, velocityY, r, color) {
    this.context = context;
    this.x = x / 2;
    this.y = y / 2;
    this.speed = speed;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = r;
    this.color = color;

    let scope = this;

    this.drawBall = function () {
        drawCircle(scope.context, scope.x, scope.y, scope.radius, scope.color);
    };

    this.setVelocityX = function (velocity = 10) {
        scope.velocityX = velocity;
    };

    this.setVelocityY = function (velocity = 10) {
        scope.velocityY = velocity;
    };

    this.setSpeed = function (speed = 10) {
        scope.speed = speed;
    };

    return {
      drawBall: this.drawBall
    };
};

export default BallFactory;