import {drawRect} from "../mixin.js";

let PlayerFactory = function (context, type, x, y, width, height, color, id) {
    this.context = context;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;

    let scope = this;

    this.drawPlayer = function () {
        drawRect(scope.context, scope.x, scope.y, scope.width, scope.height, scope.color);
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

    return {
        drawPlayer: this.drawPlayer,
        getType: this.getType,
        getX: this.getX,
        getY: this.getY,
        getHeight: this.getHeight,
        getWidth: this.getWidth,
        setY: this.setY,
        getId: this.getId
    };
};

export default PlayerFactory;