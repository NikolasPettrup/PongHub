import {drawCircle} from "../mixin.js";


/**
 * constructor of Ball
 *
 * @param {Object} context - the context of the canvas
 * @param {number} x - the x position of the ball
 * @param {number} y - the y position of the ball
 * @param {number} speed - the speed of the ball
 * @param {number} velocityX - the velocity in x direction of the ball
 * @param {number} velocityY - the velocity in y direction of the ball
 * @param {number} r - the radius of the ball
 * @param {string} color - the color of the ball as hex string
 * @returns {{
 *   setY: Ball.setY,
 *   setX: Ball.setX,
 *   setVelocityY: Ball.setVelocityY,
 *   isColliding: (function(*)),
 *   setVelocityX: Ball.setVelocityX,
 *   drawBall: Ball.drawBall,
 *   getRadius: (function(): *),
 *   setSpeed: Ball.setSpeed,
 *   getX: (function(): *|number),
 *   getY: (function(): *|number),
 *   getSpeed: (function(): number|*),
 *   getVelocityY: (function(): *),
 *   getVelocityX: (function(): *),
 *   collisionDetection: Ball.collisionDetection
 * }}
 * @constructor
 */
let Ball = function (context, x, y, speed, velocityX, velocityY, r, color) {
    /**
     * the canvas context
     *
     * @type {Object}
     */
    this.context = context;

    /**
     * the x position of the ball
     *
     * @type {number}
     */
    this.x = x / 2;

    /**
     * the y position of the ball
     *
     * @type {number}
     */
    this.y = y / 2;

    /**
     * the speed of the ball
     *
     * @type {number}
     */
    this.speed = speed;

    /**
     * the velocity in x direction of the ball
     *
     * @type {number}
     */
    this.velocityX = velocityX;

    /**
     * the velocity in y direction of the ball
     *
     * @type {number}
     */
    this.velocityY = velocityY;

    /**
     * the radius of the ball
     *
     * @type {number}
     */
    this.radius = r;

    /**
     * the color of the ball as hex string
     *
     * @type {string}
     */
    this.color = color;


    // /**
    //  * add audio for wall collision
    //  *
    //  * @type {HTMLAudioElement}
    //  */
    // let wallCollisionAudio = new Audio("src/assets/audio/wallCollision.mp3");
    // wallCollisionAudio.volume = 0.05;

    // /**
    //  * add audio for player one collision
    //  *
    //  * @type {HTMLAudioElement}
    //  */
    // let playerOneCollisionAudio = new Audio("src/assets/audio/playerOneCollision.mp3");
    // playerOneCollisionAudio.volume = 0.02;

    // /**
    //  * add audio for player two collision
    //  *
    //  * @type {HTMLAudioElement}
    //  */
    // let playerTwoCollisionAudio = new Audio("src/assets/audio/playerTwoCollision.mp3");
    // playerTwoCollisionAudio.volume = 0.02;


    /**
     * create a scope reference
     *
     * @type {Ball}
     */
    let scope = this;


    /**
     * draw the ball
     */
    this.drawBall = function () {
        drawCircle(scope.context, scope.x, scope.y, scope.radius, scope.color);
    };


    /**
     * detect any collisions of the ball
     *
     * @param {number} width - the width of the canvas
     * @param {number} height - the height of the canvas
     * @param {Player} playerOne - the instance of player one
     * @param {Player} playerTwo - the instance of player two
     */
    this.collisionDetection = function (width, height, playerOne, playerTwo) {
        /**
         * check for collision with the top or bottom border of the field
         */
        if (scope.y + scope.radius > height || scope.y - scope.radius < 0) {
            scope.velocityY = - scope.velocityY;
            // wallCollisionAudio.play();
        }


        /**
         * check for collision with either player one or player two
         */
        if (scope.isColliding(playerOne)) {
            scope.collideWithPlayer(playerOne, width);
            // playerOneCollisionAudio.play();

        } else if (scope.isColliding(playerTwo)) {
            scope.collideWithPlayer(playerTwo, width);
            // playerTwoCollisionAudio.play();
        }

    };


    /**
     * calculate collision with a player and set a new angle of reflection and speed for the ball
     *
     * @param {Player} player - the instance of the player
     * @param {number} width - the width of the canvas
     */
    this.collideWithPlayer = function (player, width) {
        /**
         * check for the collision point with the player
         *
         * @type {number}
         */
        let collidePoint = (scope.y - (player.getY() + (player.getHeight() / 2)));
        collidePoint = collidePoint / (player.getHeight() / 2);


        /**
         * calculate a new angle of reflection
         *
         * @type {number}
         */
        let angleRad = collidePoint * (Math.PI / 4);


        /**
         * set the new direction of the ball
         *
         * @type {number}
         */
        let direction = (scope.x < width / 2) ? 1 : -1;


        /**
         * check if either player one or player two is hit to calculate specific velocity x and y for the ball
         */
        if (player.getId() === 1) {
            scope.velocityX = direction * scope.speed * Math.cos(angleRad);
            scope.velocityY = direction * scope.speed * Math.sin(angleRad);

        } else {
            scope.velocityX = direction * scope.speed * Math.cos(- angleRad);
            scope.velocityY = direction * scope.speed * Math.sin(- angleRad);
        }


        /**
         * set ball speed + 0.3
         *
         * @type {number}
         */
        scope.speed += 0.3;
    }


    /**
     * check if the ball is colliding with a player
     *
     * @param {Player} player - the instance of the player
     * @returns {boolean}
     */
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


    /**
     * set velocity x of the ball
     *
     * @param {number} velocity - the new x velocity of the ball, default 5
     */
    this.setVelocityX = function (velocity = 5) {
        scope.velocityX = velocity;
    };


    /**
     * set velocity y of the ball
     *
     * @param {number} velocity - the new y velocity of the ball, default 5
     */
    this.setVelocityY = function (velocity = 5) {
        scope.velocityY = velocity;
    };


    /**
     * set speed of the ball
     *
     * @param {number} speed - the new speed of the ball, default 5
     */
    this.setSpeed = function (speed = 5) {
        scope.speed = speed;
    };


    /**
     * set x position of the ball
     *
     * @param {number} x - the new x position of the ball
     */
    this.setX = function (x) {
        scope.x = x;
    };


    /**
     * set y position of the ball
     *
     * @param {number} y - the new y position of the ball
     */
    this.setY = function (y) {
        scope.y = y;
    };


    /**
     * get the speed of the ball
     *
     * @returns {number}
     */
    this.getSpeed = function () {
        return scope.speed;
    };


    /**
     * get the x velocity of the ball
     *
     * @returns {number}
     */
    this.getVelocityX = function () {
        return scope.velocityX;
    };


    /**
     * get the y velocity of the ball
     *
     * @returns {number}
     */
    this.getVelocityY = function () {
        return scope.velocityY;
    };


    /**
     * get the x position of the ball
     *
     * @returns {number}
     */
    this.getX = function () {
        return scope.x;
    };


    /**
     * get the y position of the ball
     *
     * @returns {number}
     */
    this.getY = function () {
        return scope.y;
    };


    /**
     * get the radius of the ball
     *
     * @returns {number}
     */
    this.getRadius = function () {
        return scope.radius;
    };


    /**
     * return all functions of Ball
     */
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


/**
 * export Ball to make it importable for other files
 */
export default Ball;