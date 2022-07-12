import SceneFactory from "./Scene/scene.factory.js";
import {paddleDown, paddleUp} from "./paddle/paddleControl.js";

let canvasId = "cvsPong";
if (!window.document.getElementById(canvasId)) {
    let canvas = document.createElement("canvas");
    canvas.id = canvasId;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let div = document.getElementsByClassName("pong-game")[0];
    div.appendChild(canvas);
}
let main = () => {
    // let scene = new SceneFactory(canvasId, window);
    // setInterval(scene.game, 1000/120);
};

let scene = new SceneFactory(canvasId, window);
scene.draw();
// setInterval(scene.game, 1000/120);

window.addEventListener('keydown', function (event) {
    if (event.code === "KeyW"){
        paddleUp(scene.getPlayerOne());
    } else if (event.code === "KeyS"){
        paddleDown(scene.getPlayerOne(), scene.getHeight());
    }
});
window.addEventListener('keydown', function (event) {
    if (event.code === "ArrowUp"){
        paddleUp(scene.getPlayerTwo());
    } else if (event.code === "ArrowDown"){
        paddleDown(scene.getPlayerTwo(), scene.getHeight());
    }
});

window.addEventListener('load', main);
window.addEventListener('resize', main);