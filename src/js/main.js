import Scene from "./Scene/scene.js";

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
    // let scene = new Scene(canvasId, window);
};

let scene = {};

let start = () => {
    scene = new Scene(canvasId, window);
    scene.draw();
    setInterval(scene.render, 1000/120);
}

window.addEventListener('load', main);
window.addEventListener('resize', main);
window.addEventListener('keydown', function (event) {
   if (event.code === "Enter" && Object.keys(scene).length === 0) {
       start();
   }
});