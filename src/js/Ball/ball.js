import {drawCircle} from "../mixin.js";

let Ball = function (context, x, y, speed, velocityX, velocityY, r, color) {
    this.context = context;
    this.x = x / 2;
    this.y = y / 2;
    this.speed = speed;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = r;
    this.color = color;
    let wallCollisionAudio = new Audio("src/assets/audio/wallCollision.mp3");
    wallCollisionAudio.volume = 0.05;
    let playerOneCollisionAudio = new Audio("src/assets/audio/playerOneCollision.mp3");
    playerOneCollisionAudio.volume = 0.02;
    let playerTwoCollisionAudio = new Audio("src/assets/audio/playerTwoCollision.mp3");
    playerTwoCollisionAudio.volume = 0.02;

    let scope = this;

    this.drawBall = function () {
        drawCircle(scope.context, scope.x, scope.y, scope.radius, scope.color);
    };

    this.collisionDetection = function (width, height, playerOne, playerTwo) {
        // detect collision with top or bottom of the field
        if (scope.y + scope.radius > height || scope.y - scope.radius < 0) {
            scope.velocityY = - scope.velocityY;
            wallCollisionAudio.play();
        }

        // detect collision with player
        if (scope.isColliding(playerOne)) {
            scope.collideWithPlayer(playerOne, width);
            playerOneCollisionAudio.play();
        } else if (scope.isColliding(playerTwo)) {
            scope.collideWithPlayer(playerTwo, width);
            playerTwoCollisionAudio.play();
        }

    };

    this.collideWithPlayer = function (player, width) {
        let collidePoint = (scope.y - (player.getY() + (player.getHeight() / 2)));
        collidePoint = collidePoint / (player.getHeight() / 2);

        let angleRad = collidePoint * (Math.PI / 3);

        let direction = (scope.x < width / 2) ? 1 : -1;

        if (player.getId() === 1) {
            scope.velocityX = direction * scope.speed * Math.cos(angleRad);
            scope.velocityY = direction * scope.speed * Math.sin(angleRad);
        } else {
            scope.velocityX = direction * scope.speed * Math.cos(- angleRad);
            scope.velocityY = direction * scope.speed * Math.sin(- angleRad);
        }

        scope.speed += 0.3;
    }

    this.isColliding = function (player){
        let playerTop = player.getY();
        let playerBottom = player.getY() + player.getHeight();
        let playerLeft = player.getX();
        let playerRight = player.getX() + player.getWidth();

        let ballTop = scope.y - scope.radius;
        let ballBottom = scope.y + scope.radius;
        let ballLeft = scope.x - scope.radius;
        let ballRight = scope.x + scope.radius;

        return ballRight > playerLeft && ballTop < playerBottom && ballLeft < playerRight && ballBottom > playerTop;
    };

    this.setVelocityX = function (velocity = 5) {
        scope.velocityX = velocity;
    };

    this.setVelocityY = function (velocity = 5) {
        scope.velocityY = velocity;
    };

    this.setSpeed = function (speed = 5) {
        scope.speed = speed;
    };

    this.setX = function (x) {
        scope.x = x;
    };

    this.setY = function (y) {
        scope.y = y;
    };

    this.getSpeed = function () {
        return scope.speed;
    };

    this.getVelocityX = function () {
        return scope.velocityX;
    };

    this.getVelocityY = function () {
        return scope.velocityY;
    };

    this.getX = function () {
        return scope.x;
    };

    this.getY = function () {
        return scope.y;
    };

    this.getRadius = function () {
        return scope.radius;
    };



    return {
        drawBall: this.drawBall,
        getSpeed: this.getSpeed,
        setSpeed: this.setSpeed,
        getVelocityX: this.getVelocityX,
        getVelocityY: this.getVelocityY,
        setVelocityX: this.setVelocityX,
        setVelocityY: this.setVelocityY,
        getX: this.getX,
        getY: this.getY,
        getRadius: this.getRadius,
        setX: this.setX,
        setY: this.setY,
        collisionDetection: this.collisionDetection,
        isColliding: this.isColliding
    };
};

export default Ball;