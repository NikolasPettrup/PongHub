export default function SceneFactory (elementId, window, width = 0, height = 0) {

    this.element = window.document.getElementById(elementId);
    this.context = element.getContext("2d")
    this.width = width;
    this.height = height;
    this.color = '#000000';
    this.startX = 0;
    this.startY = 0;
    this.ballFactory = new BallFactory(this.context);

    this.drawRect();

    this.draw = function(){
        this.drawRect();
        this.drawNet();
    };

    this.drawRect = function() {
        context.fillStyle = this.color;
        context.fillRect(this.startX, this.startY, this.width, this.height);
    };


    this.drawNet = function(){

    };



    return {
        draw: this.draw

    };
};