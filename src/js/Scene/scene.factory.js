import {drawNet, drawRect} from "../mixin.js";
import BallFactory from "../Ball/ball.factory.js";
import PlayerFactory from "../Player/player.factory.js";

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
        drawNet(scope.context, (scope.width / 2) - 1, 0, 2, 10, scope.height, "#FFA200");

        let ballFactory = new BallFactory(scope.context, scope.width, scope.height, 10, 10, 10, 15, "#FFFFFF");
        ballFactory.drawBall();

        let playerOne = new PlayerFactory(scope.context, "user", 0, (scope.height / 2) - 75, 15, 150, "#FFA200");
        let playerTwo = new PlayerFactory(scope.context, "com", scope.width - 15, (scope.height / 2) - 75, 15, 150, "#FFA200");

        playerOne.drawPlayer();
        playerTwo.drawPlayer();

    };


    return {
        draw: this.draw
    };
};


export default SceneFactory;