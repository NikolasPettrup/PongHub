/**
 * draw a rectangle in a canvas context
 *
 * @param {object} context - the canvas' context
 * @param {number} x - the x position of the rectangle
 * @param {number} y - the y position of the rectangle
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @param {string} color - the color of the rectangle as hex string
 */
export function drawRect(context, x, y, width, height, color){
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}


/**
 * draw a net from rectangles on the canvas
 *
 * @param {object} context - the canvas' context
 * @param {number} x - the x position of the net
 * @param {number} y - the y position of the net
 * @param {number} netWidth - the width of each net rectangle
 * @param {number} netHeight - the height of each net rectangle
 * @param {number} height - the height of the canvas
 * @param {string} color - the color of the net rectangles as hex string
 */
export function drawNet(context, x, y, netWidth, netHeight, height, color) {
    for(let i = 0; i <= height; i += 15) {
        drawRect(context, x, y + i, netWidth, netHeight, color);
    }
}


/**
 * draw a circle in a canvas context
 *
 * @param {object} context - the canvas' context
 * @param {number} x - the x position of the circle
 * @param {number} y - the y position of the circle
 * @param {number} r - the radius of the circle
 * @param {string} color - the color of the circle as hex string
 */
export function drawCircle(context, x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}