let AudioList = function () {
    this.audioList = {
        startMenu: new Audio("src/assets/audio/startmenu.mp3"),
        inGame: new Audio("src/assets/audio/ingame.mp3"),
        wallCollision: new Audio("src/assets/audio/wallCollision.mp3"),
        playerOneCollision: new Audio("src/assets/audio/playerOneCollision.mp3"),
        playerTwoCollision: new Audio("src/assets/audio/playerTwoCollision.mp3"),
    }

    let scope = this;

    this.getAudioList = function () {
        return scope.audioList;
    };

    return {
        getAudioList: this.getAudioList
    };
}

export default AudioList;