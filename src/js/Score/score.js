let Score = function (scorePlayerOne, scorePlayerTwo) {
    this.scorePlayerOne = scorePlayerOne;
    this.scorePlayerTwo = scorePlayerTwo;

    let scope = this;

    this.getScorePlayerOne = function () {
        return scope.scorePlayerOne;
    };

    this.getScorePlayerTwo = function () {
        return scope.scorePlayerTwo;
    };

    this.setScorePlayerOne = function (score = 0) {
        scope.scorePlayerOne = score;
    };

    this.setScorePlayerTwo = function (score = 0) {
        scope.scorePlayerTwo = score;
    };


    return {
        getScorePlayerOne: this.getScorePlayerOne,
        getScorePlayerTwo: this.getScorePlayerTwo,
        setScorePlayerOne: this.setScorePlayerOne,
        setScorePlayerTwo: this.setScorePlayerTwo
    };

};

export default Score;