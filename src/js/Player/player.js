import {drawRect} from "../mixin.js";
import {getControl} from "../paddle/control.js";

let Player = function (context, type, x, y, width, height, color, id) {
    this.context = context;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.upKey = "";
    this.downKey = "";
    this.speedKey = "";

    let scope = this;

    let control = getControl();

    this.drawPlayer = function () {
        drawRect(scope.context, scope.x, scope.y, scope.width, scope.height, scope.color);
    };

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

    this.moveUp = function (speed) {
        if (scope.getY() > 0) {
            scope.setY(scope.getY() - (10 * speed));
        }
    };

    this.moveDown = function (height, speed) {
        if (scope.getY() < height - 150) {
            scope.setY(scope.getY() + (10 * speed));
        }
    };

    this.getType = function () {
        return scope.type;
    };

    this.setY = function (y) {
        scope.y = y;
    };

    this.getX = function () {
        return scope.x;
    };

    this.getY = function () {
        return scope.y;
    };

    this.getHeight = function () {
        return scope.height;
    };

    this.getWidth = function () {
        return scope.width;
    };

    this.getId = function () {
        return scope.id;
    };

    this.setUpKey = function (key) {
        scope.upKey = key;
    };

    this.setDownKey = function (key) {
        scope.downKey = key;
    };

    this.setSpeedKey = function (key) {
        scope.speedKey = key;
    };

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

export default Player;