import SceneFactory from "./Scene/scene.factory.js";

let canvasId = "cvsPong";
if (!window.document.getElementById(canvasId)) {
    let canvas = document.createElement("canvas");
    canvas.id = canvasId;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
}
let main = () => {
    let scene = new SceneFactory(canvasId, window);
    scene.draw();
};
window.addEventListener('load', main);
window.addEventListener('resize', main);