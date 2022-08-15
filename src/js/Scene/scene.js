import {drawNet, drawRect} from "../mixin.js";
import Ball from "../Ball/ball.js";
import Player from "../Player/player.js";
import Score from "../Score/score.js";
import {getControl} from "../paddle/control.js";


/**
 * constructor of Scene
 *
 * @param {string} elementId - the id of the canvas
 * @param {Window} window - the window of the browser
 * @returns {{
 *   getHeight: (function(): number),
 *   update: Scene.update,
 *   reset: Scene.reset,
 *   draw: Scene.draw,
 *   render: Scene.render
 * }}
 * @constructor
 */
let Scene = function (elementId, window) {
    /**
     * canvas element
     *
     * @type {HTMLElement}
     */
    this.element = window.document.getElementById(elementId);

    /**
     * context from canvas element
     *
     * @type {object}
     */
    this.context = this.element.getContext("2d");

    /**
     * width of window
     *
     * @type {number}
     */
    this.width = window.innerWidth;

    /**
     * height of window
     *
     * @type {number}
     */
    this.height = window.innerHeight;

    /**
     * color as hex string with default black
     *
     * @type {string}
     */
    this.color = '#000000';

    /**
     * starting x position with default 0
     *
     * @type {number}
     */
    this.startX = 0;

    /**
     * starting y position with default 0
     *
     * @type {number}
     */
    this.startY = 0;


    /**
     * scope reference
     *
     * @type {Scene}
     */
    let scope = this;


    /**
     * get instance of control
     *
     * @type {Control}
     */
    let control = getControl();


    /**
     * instantiate a new Ball
     *
     * @type {Ball}
     */
    let ball = new Ball(scope.context, scope.width, scope.height, 5, 5, 5, 15, "#FFFFFF");


    /**
     * instantiate player one and set control keys
     *
     * @type {Player}
     */
    this.playerOne = new Player(scope.context, "user", 0, (scope.height / 2) - 75, 15, 150, "#FFA200", 1);
    this.playerOne.setUpKey("w");
    this.playerOne.setDownKey("s");
    this.playerOne.setSpeedKey("Shift");


    /**
     * instantiate player two and set control keys
     *
     * @type {Player}
     */
    this.playerTwo = new Player(scope.context, "com", scope.width - 15, (scope.height / 2) - 75, 15, 150, "#FFA200", 2);
    this.playerTwo.setUpKey("ArrowUp");
    this.playerTwo.setDownKey("ArrowDown");
    this.playerTwo.setSpeedKey("0");


    /**
     * instantiate the score and set it to 0:0
     *
     * @type {Score}
     */
    let score = new Score(0, 0);

    /**
     * add player one score to view
     *
     * @type {Score.scorePlayerOne|*|number}
     */
    document.getElementById("playerOneScore").innerHTML = score.getScorePlayerOne();

    /**
     * add player two score to view
     *
     * @type {Score.scorePlayerOne|*|number}
     */
    document.getElementById("playerTwoScore").innerHTML = score.getScorePlayerTwo();


    /**
     * draw the scene
     */
    this.draw = function () {
        /**
         * draw the field background with logo and net
         */
        drawRect(scope.context, scope.startX, scope.startY, scope.width, scope.height, scope.color);

        let logo = new Image();
        logo.src = "../src/assets/img/pong-tri-50op.png";
        scope.context.drawImage(logo, ((scope.width / 2) - (logo.width / 2)), ((scope.height / 2) - (logo.height / 2)));



        drawNet(scope.context, (scope.width / 2) - 1, 0, 2, 10, scope.height, "#FFA200");


        /**
         * draw the ball
         */
        ball.drawBall();


        /**
         * draw the player paddles
         */
        scope.playerOne.drawPlayer();
        scope.playerTwo.drawPlayer();

    };


    /**
     * update the current scene
     */
    this.update = function () {
        /**
         * move the player paddles if specific keys are pressed
         */
        scope.playerOne.move(scope.height);
        scope.playerTwo.move(scope.height);


        /**
         * calculate new position of the ball
         */
        ball.setX(ball.getX() + ball.getVelocityX());
        ball.setY(ball.getY() + ball.getVelocityY());

        // add simple AI to computer player
        // let computerLevel = 1.1;
        // scope.playerOne.setY(scope.playerOne.getY() + ((ball.getY() - (scope.playerOne.getY() + (scope.playerOne.getHeight() / 2)) * computerLevel)));
        // scope.playerTwo.setY(scope.playerTwo.getY() + ((ball.getY() - (scope.playerTwo.getY() + (scope.playerTwo.getHeight() / 2)) * computerLevel)));

        /**
         * detect any form of collisions in the game
         */
        ball.collisionDetection(scope.width, scope.height, scope.playerOne, scope.playerTwo);


        /**
         * check if either player one or player two has scored
         */
        if (ball.getX() + ball.getRadius() > scope.width) {
            /**
             * set player one score + 1 and reset the ball
             */
            score.setScorePlayerOne(score.getScorePlayerOne() + 1);
            document.getElementById("playerOneScore").innerHTML = score.getScorePlayerOne().toString();
            this.reset();

        } else if (ball.getX() - ball.getRadius() < 0) {
            /**
             * set player two score + 1 and reset the ball
             */
            score.setScorePlayerTwo(score.getScorePlayerTwo() + 1);
            document.getElementById("playerTwoScore").innerHTML = score.getScorePlayerTwo().toString();
            this.reset();
        }


        /**
         * check if either player one or player two has won
         */
        if (score.getScorePlayerOne() === score.getPointsToWin() || score.getScorePlayerTwo() === score.getPointsToWin())
        {
            /**
             * remove game canvas
             */
            document.getElementById("cvsPong").remove();
            clearInterval(window.myTimer);


            /**
             * set display of ending-screen to block
             */
            document.getElementById("ending-screen").style.display = "block";


            /**
             * show winner message
             */
            if (score.getScorePlayerOne() === score.getPointsToWin()) {
                document.getElementById("winner-message").innerHTML = "Player One wins!";
            } else {
                document.getElementById("winner-message").innerHTML = "Player Two wins!";
            }

            /**
             * show countdown before reloading game
             */
            (function countdown(remaining) {
                if (remaining <= 0)
                {
                    window.location.reload();
                } else {
                    document.getElementById("time").innerHTML = remaining + " ";
                    setTimeout(function () {
                        countdown(remaining - 1);
                    }, 1000);
                }
            })(5);
        }
    };


    /**
     * render the game
     */
    this.render = function () {
        scope.draw();
        scope.update();
    };


    /**
     * reset the ball
     */
    this.reset = function () {
        ball.setX(scope.width / 2);
        ball.setY(scope.height / 2);
        ball.setSpeed(5);
        ball.setVelocityX();
        ball.setVelocityY();
    };


    /**
     * get instance of player one
     *
     * @returns {Player}
     */
    this.getPlayerOne = function () {
        return scope.playerOne;
    };


    /**
     * get instance of player two
     *
     * @returns {Player}
     */
    this.getPlayerTwo = function () {
        return scope.playerTwo;
    };


    /**
     * get height of the canvas
     *
     * @returns {number}
     */
    this.getHeight = function () {
        return scope.height;
    };


    /**
     * return all functions
     */
    return {
        draw: this.draw,
        update: this.update,
        render: this.render,
        reset: this.reset,
        getPlayerOne: this.getPlayerOne,
        getPlayerTwo: this.getPlayerTwo,
        getHeight: this.getHeight
    };
};


/**
 * export Scene to make it importable for other files
 */
export default Scene;