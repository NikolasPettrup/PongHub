export function paddleUp(player) {
    if (player.getY() > 0) {
        player.setY(player.getY() - 100)
    }
}

export function paddleDown(player, height) {
    if (player.getY()< height){
        player.setY(player.getY() + 100);
    }
}