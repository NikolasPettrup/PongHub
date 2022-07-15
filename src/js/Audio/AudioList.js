/**
 * constructor of audio list
 *
 * @returns {{
 *   getAudioList: (function(): *|
 *   {
 *     playerTwoCollision: HTMLAudioElement,
 *     startMenu: HTMLAudioElement,
 *     inGame: HTMLAudioElement,
 *     playerOneCollision: HTMLAudioElement,
 *     wallCollision: HTMLAudioElement
 *   })
 * }}
 * @constructor
 */
let AudioList = function () {
    /**
     * set all needed audio elements
     *
     * @type {Object.<string, HTMLAudioElement>}
     */
    this.audioList = {
        startMenu: new Audio("src/assets/audio/startmenu.mp3"),
        inGame: new Audio("src/assets/audio/ingame.mp3"),
        wallCollision: new Audio("src/assets/audio/wallCollision.mp3"),
        playerOneCollision: new Audio("src/assets/audio/playerOneCollision.mp3"),
        playerTwoCollision: new Audio("src/assets/audio/playerTwoCollision.mp3"),
    }

    /**
     * create scope reference
     *
     * @type {AudioList}
     */
    let scope = this;


    /**
     * get the audio list
     *
     * @returns {Object.<string, HTMLAudioElement>}
     */
    this.getAudioList = function () {
        return scope.audioList;
    };


    /**
     * return all functions of AudioList
     */
    return {
        getAudioList: this.getAudioList
    };
}


/**
 * export AudioList to make it importable for other files
 */
export default AudioList;