import {drawRect} from "../mixin.js";
import {getControl} from "../paddle/control.js";


/**
 * constructor of player
 *
 * @param {object} context - the canvas' context
 * @param {string} type - the type of the player (user or com)
 * @param {number} x - the x position of the player
 * @param {number} y - the y position of the player
 * @param {number} width - the width of the player's paddle
 * @param {number} height - the height of the player's paddle
 * @param {string} color - the color of the player's paddle as hex string
 * @param {number} id - the id of the player
 * @returns {{
 *   drawPlayer: Player.drawPlayer,
 *   setY: Player.setY,
 *   move: Player.move,
 *   getId: (function(): *),
 *   getWidth: (function(): *),
 *   setDownKey: Player.setDownKey,
 *   moveDown: Player.moveDown,
 *   setSpeedKey: Player.setSpeedKey,
 *   getX: (function(): *),
 *   getHeight: (function(): *),
 *   setUpKey: Player.setUpKey,
 *   getY: (function(): *),
 *   getType: (function(): *),
 *   moveUp: Player.moveUp
 * }}
 * @constructor
 */
let Player = function (context, type, x, y, width, height, color, id) {
    /**
     * the context of the canvas
     *
     * @type {Object}
     */
    this.context = context;

    /**
     * the type of the player
     *
     * @type {string}
     */
    this.type = type;

    /**
     * the x position of the player
     *
     * @type {number}
     */
    this.x = x;

    /**
     * the y position of the player
     *
     * @type {number}
     */
    this.y = y;

    /**
     * the width of the player's paddle
     *
     * @type {number}
     */
    this.width = width;

    /**
     * the height of the player's paddle
     *
     * @type {number}
     */
    this.height = height;

    /**
     * the color of the player's paddle as hex string
     *
     * @type {string}
     */
    this.color = color;

    /**
     * the id of the player
     *
     * @type {number}
     */
    this.id = id;

    /**
     * the move up key of the player
     *
     * @type {string}
     */
    this.upKey = "";

    /**
     * the move down key of the player
     *
     * @type {string}
     */
    this.downKey = "";

    /**
     * the speed key of the player
     *
     * @type {string}
     */
    this.speedKey = "";


    /**
     * set a scope reference
     *
     * @type {Player}
     */
    let scope = this;


    /**
     * get an instance of the control listener
     *
     * @type {Control}
     */
    let control = getControl();


    /**
     * draw the player's paddle
     */
    this.drawPlayer = function () {
        drawRect(scope.context, scope.x, scope.y, scope.width, scope.height, scope.color);
    };


    /**
     * move the player in specific direction and on specific speed on key press
     *
     * @param {number} height - the height of the canvas
     */
    this.move = function (height) {
        switch (true) {
            case control.isKeyDown(scope.upKey):
                scope.moveUp(control.isKeyDown(scope.speedKey) ? 2 : 1);
                break;

            case control.isKeyDown(scope.downKey):
                scope.moveDown(height, control.isKeyDown(scope.speedKey) ? 2 : 1);
                break;
        }
    };


    /**
     * move up the paddle
     *
     * @param {number} speed - the speed of the paddle
     */
    this.moveUp = function (speed) {
        if (scope.getY() > 0) {
            scope.setY(scope.getY() - (10 * speed));
        }
    };


    /**
     * move down the paddle
     *
     * @param {number} height - the height of the canvas
     * @param {number} speed - the speed of the paddle
     */
    this.moveDown = function (height, speed) {
        if (scope.getY() < height - 150) {
            scope.setY(scope.getY() + (10 * speed));
        }
    };


    /**
     * get the type of the player
     *
     * @returns {string}
     */
    this.getType = function () {
        return scope.type;
    };


    /**
     * get the x position of the player
     *
     * @returns {number}
     */
    this.getX = function () {
        return scope.x;
    };


    /**
     * get the y position of the player
     *
     * @returns {number}
     */
    this.getY = function () {
        return scope.y;
    };


    /**
     * get the height of the player's paddle
     *
     * @returns {number}
     */
    this.getHeight = function () {
        return scope.height;
    };


    /**
     * get the width of the player's paddle
     *
     * @returns {number}
     */
    this.getWidth = function () {
        return scope.width;
    };


    /**
     * get the id of the player
     *
     * @returns {number}
     */
    this.getId = function () {
        return scope.id;
    };


    /**
     * set the y position of the player
     *
     * @param {number} y - the y position
     */
    this.setY = function (y) {
        scope.y = y;
    };


    /**
     * set the move up key of the player
     *
     * @param {string} key - the key which gets pressed
     */
    this.setUpKey = function (key) {
        scope.upKey = key;
    };


    /**
     * set the move down key of the player
     *
     * @param {string} key - the key which gets pressed
     */
    this.setDownKey = function (key) {
        scope.downKey = key;
    };


    /**
     * set the speed key of the player
     *
     * @param {string} key - the key which gets pressed
     */
    this.setSpeedKey = function (key) {
        scope.speedKey = key;
    };


    /**
     * return all functions of the player
     */
    return {
        drawPlayer: this.drawPlayer,
        getType: this.getType,
        getX: this.getX,
        getY: this.getY,
        getHeight: this.getHeight,
        getWidth: this.getWidth,
        setY: this.setY,
        getId: this.getId,
        setUpKey: this.setUpKey,
        setDownKey: this.setDownKey,
        setSpeedKey: this.setSpeedKey,
        move: this.move,
        moveUp: this.moveUp,
        moveDown: this.moveDown
    };
};


/**
 * export Player to make it importable for other files
 */
export default Player;