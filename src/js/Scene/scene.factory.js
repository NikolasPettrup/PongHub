import {drawNet, drawRect} from "../mixin.js";
import Ball from "../Ball/ball.js";
import PlayerFactory from "../Player/player.factory.js";
import Score from "../Score/score.js";

let SceneFactory = function(elementId, window) {
    this.element = window.document.getElementById(elementId);
    this.context = this.element.getContext("2d")
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.color = '#000000';
    this.startX = 0;
    this.startY = 0;

    let scope = this;

    let ball = new Ball(scope.context, scope.width, scope.height, 5, 5, 5, 15, "#FFFFFF");

    this.playerOne = new PlayerFactory(scope.context, "user", 0, (scope.height / 2) - 75, 15, 150, "#FFA200");
    this.playerTwo = new PlayerFactory(scope.context, "com", scope.width - 15, (scope.height / 2) - 75, 15, 150, "#FFA200");

    let score = new Score(0, 0);
    document.getElementById("playerOneScore").innerHTML = score.getScorePlayerOne();
    document.getElementById("playerTwoScore").innerHTML = score.getScorePlayerTwo();



    this.draw = function(){
        // create field with net
        scope.element.width = scope.width;
        scope.element.height = scope.height;
        drawRect(scope.context, scope.startX, scope.startY, scope.width, scope.height, scope.color);
        drawNet(scope.context, (scope.width / 2) - 1, 0, 2, 10, scope.height, "#FFA200");

        // create ball
        ball.drawBall();

        // create players
        scope.playerOne.drawPlayer();
        scope.playerTwo.drawPlayer();

    };

    this.update = function () {
        ball.setX(ball.getX() + ball.getVelocityX());
        ball.setY(ball.getY() + ball.getVelocityY());

        // add simple AI to computer player
        // let computerLevel = 1.1;
        // playerOne.setY(playerOne.getY() + ((ball.getY() - (playerOne.getY() + (playerOne.getHeight() / 2)) * computerLevel)));
        // scope.playerTwo.setY(scope.playerTwo.getY() + ((ball.getY() - (scope.playerTwo.getY() + (scope.playerTwo.getHeight() / 2)) * computerLevel)));

        // collision detection
        ball.collisionDetection(scope.width, scope.height, scope.playerOne, scope.playerTwo);

        // check if a player scored a goal
        if (ball.getX() - ball.getRadius() < 0) {
            score.setScorePlayerTwo(score.getScorePlayerTwo() + 1);
            document.getElementById("playerTwoScore").innerHTML = score.getScorePlayerTwo().toString();
            this.reset();

        } else if (ball.getX() + ball.getRadius() > scope.width) {
            score.setScorePlayerOne(score.getScorePlayerOne() + 1);
            document.getElementById("playerOneScore").innerHTML = score.getScorePlayerOne().toString();
            this.reset();
        }
    };


    this.game = function () {
        scope.draw();
        scope.update();
    };


    this.reset = function () {
        ball.setX(scope.width / 2);
        ball.setY(scope.height / 2);
        ball.setSpeed();
        ball.setVelocityX();
        ball.setVelocityY();
    };

    this.getPlayerOne = function () {
        return scope.playerOne;
    };

    this.getPlayerTwo = function () {
        return scope.playerTwo;
    };

    this.getHeight = function () {
        return scope.height;
    };

    return {
        draw: this.draw,
        update: this.update,
        game: this.game,
        reset: this.reset,
        getPlayerOne: this.getPlayerOne,
        getPlayerTwo: this.getPlayerTwo,
        getHeight: this.getHeight
    };
};


export default SceneFactory;