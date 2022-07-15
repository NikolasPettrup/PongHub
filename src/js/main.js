import Scene from "./Scene/scene.js";


/**
 * declare scene type
 *
 * @type {object}
 */
let scene = {};


/**
 * create a new game screen
 */
let start = () => {
    /**
     * starting screen element from body
     * 
     * @type {HTMLElement}
     */
    let child = document.getElementById("starting-screen");

    /**
     * body element
     * 
     * @type {HTMLBodyElement}
     */
    let parent = document.getElementsByTagName("body")[0];

    /**
     * remove starting screen from body
     */
    parent.removeChild(child);

    /**
     * remove style attribute from element pong-game to display this element
     */
    document.getElementById("pong-game").removeAttribute("style");


    /**
     * canvas id
     * 
     * @type {string}
     */
    let canvasId = "cvsPong";

    /**
     * check if canvas already exists
     */
    if (!window.document.getElementById(canvasId)) {
        /**
         * create new canvas element
         * 
         * @type {HTMLCanvasElement}
         */
        let canvas = document.createElement("canvas");

        /**
         * set canvas id
         *
         * @type {string}
         */
        canvas.id = canvasId;

        /**
         * set canvas width to window innerWidth
         * 
         * @type {number}
         */
        canvas.width = window.innerWidth;

        /**
         * set canvas height to window innerHeight
         * 
         * @type {number}
         */
        canvas.height = window.innerHeight;

        /**
         * get pong-game element and append this element with canvas child
         *
         * @type {Element}
         */
        let div = document.getElementsByClassName("pong-game")[0];
        div.appendChild(canvas);
    }

    /**
     * instantiate a new scene
     *
     * @type {object}
     * @param {string} elementId - the id of the canvas
     * @param {Window} window - the current browser window
     */
    scene = new Scene(canvasId, window);

    /**
     * draw the new scene
     */
    scene.draw();

    /**
     * set a refresh interval
     *
     * @param {function} func - the function which will be executed in the set interval
     * @param {number} timeout - the timeout (frames per second)
     */
    setInterval(scene.render, 1000/120);
}


/**
 * add event listeners for resizing
 */
// window.addEventListener('load', main);
// window.addEventListener('resize', main);


/**
 * add event listener for on click starting game
 */
document.getElementById ("main-menu").addEventListener ("click", start);