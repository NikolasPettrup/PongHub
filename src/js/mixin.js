export function drawRect(context, x, y, width, height, color){
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

export function drawNet(context, x, y, netWidth, netHeight, height, color) {
    for(let i = 0; i <= height; i += 15) {
        drawRect(context, x, y + i, netWidth, netHeight, color);
    }
}

export function drawCircle(context, x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}