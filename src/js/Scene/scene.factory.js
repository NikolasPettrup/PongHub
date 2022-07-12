import {drawNet, drawRect} from "../mixin.js";

let SceneFactory = function(elementId, window) {
    this.element = window.document.getElementById(elementId);
    this.context = this.element.getContext("2d")
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.color = '#000000';
    this.startX = 0;
    this.startY = 0;
    let scope = this;


    this.draw = function(){
        scope.element.width = scope.width;
        scope.element.height = scope.height;
        drawRect(scope.context, scope.startX, scope.startY, scope.width, scope.height, scope.color);
        drawNet(scope.context, (scope.width / 2) - 1, 0, 2, 10, scope.height, "#FFFFFF");
    };


    return {
        draw: this.draw
    };
};


export default SceneFactory;