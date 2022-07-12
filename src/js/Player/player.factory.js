import {drawRect} from "../mixin.js";

let PlayerFactory = function (context, type, x, y, width, height, color) {
    this.context = context;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    let scope = this;

    this.drawPlayer = function () {
        drawRect(scope.context, scope.x, scope.y, scope.width, scope.height, scope.color);
    };

    this.getType = function () {
        return scope.type;
    };

    return {
        drawPlayer: this.drawPlayer,
        getType: this.getType
    };
};

export default PlayerFactory;