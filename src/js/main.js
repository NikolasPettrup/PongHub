import Scene from "./Scene/scene.js";

let main = () => {
    // let scene = new Scene(canvasId, window);
};


/**
 * declare scene type
 * @type {object}
 */
let scene = {};


/**
 * create the game on start
 */
let start = () => {
    let child = document.getElementById("starting-screen");
    let parent = document.getElementsByTagName("body")[0];
    parent.removeChild(child);

    // document.getElementsByClassName("starting-screen")[0].innerHTML = "";
    document.getElementById("pong-game").removeAttribute("style");

    let canvasId = "cvsPong";
    if (!window.document.getElementById(canvasId)) {
        let canvas = document.createElement("canvas");
        canvas.id = canvasId;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let div = document.getElementsByClassName("pong-game")[0];
        div.appendChild(canvas);
    }

    scene = new Scene(canvasId, window);
    scene.draw();
    setInterval(scene.render, 1000/120);
}


/**
 * add event listeners for resizing
 */
window.addEventListener('load', main);
window.addEventListener('resize', main);


/**
 * add event listener for on click starting game
 */
document.getElementById ("main-menu").addEventListener ("click", start);

function startGameEvent() {
    if (Object.keys('scene').length === 0) {
        start();
    }
}