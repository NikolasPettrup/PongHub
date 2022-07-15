/**
 * constructor of score
 *
 * @param {number} scorePlayerOne - the score of player one
 * @param {number} scorePlayerTwo - the score of player two
 * @returns {{
 *   getScorePlayerOne: (function(): number|*),
 *   getScorePlayerTwo: (function(): number|*),
 *   setScorePlayerOne: Score.setScorePlayerOne,
 *   setScorePlayerTwo: Score.setScorePlayerTwo
 * }}
 * @constructor
 */
let Score = function (scorePlayerOne, scorePlayerTwo) {
    /**
     * set score of player one
     *
     * @type {number}
     */
    this.scorePlayerOne = scorePlayerOne;

    /**
     * set score of player two
     *
     * @type {number}
     */
    this.scorePlayerTwo = scorePlayerTwo;

    /**
     * set a scope reference
     *
     * @type {Score}
     */
    let scope = this;


    /**
     * get the score of player one
     *
     * @returns {number}
     */
    this.getScorePlayerOne = function () {
        return scope.scorePlayerOne;
    };


    /**
     * get the score of player two
     *
     * @returns {number}
     */
    this.getScorePlayerTwo = function () {
        return scope.scorePlayerTwo;
    };


    /**
     * set the score of player one
     *
     * @param {number} score - the new score
     */
    this.setScorePlayerOne = function (score = 0) {
        scope.scorePlayerOne = score;
    };


    /**
     * set the score of player two
     *
     * @param {number} score - the new score
     */
    this.setScorePlayerTwo = function (score = 0) {
        scope.scorePlayerTwo = score;
    };


    /**
     * return all functions of score
     */
    return {
        getScorePlayerOne: this.getScorePlayerOne,
        getScorePlayerTwo: this.getScorePlayerTwo,
        setScorePlayerOne: this.setScorePlayerOne,
        setScorePlayerTwo: this.setScorePlayerTwo
    };

};


/**
 * export Score to make it importable for other files
 */
export default Score;