class Paddle {
    constructor() {
        this.color = 'white';
        this.paddleLeft = {
            x: grid * 2,
            y: canvas.height / 2 - paddleHeight / 2,
            width: grid,
            height: paddleHeight, // vận tốc mái chèo.
            dy: 0
        }
        this.paddleRight = {
            x: canvas.width - grid * 2, y: canvas.height / 2 - paddleHeight / 2,
            width: grid,
            height: paddleHeight, // vận tốc mái chèo.
            dy: 0,

        }
    }

    draw() {
        context.beginPath();
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, grid);
        context.fillRect(0, canvas.height - grid, canvas.width, canvas.height)
        context.closePath()
    }


    drawPaddle() {
        context.beginPath();
        context.fillStyle = "white";
        context.fillRect(this.paddleLeft.x, this.paddleLeft.y, this.paddleLeft.width, this.paddleLeft.height);
        context.fillRect(this.paddleRight.x, this.paddleRight.y, this.paddleRight.width, this.paddleRight.height);
        // context.fillRect(ball.x, ball.y, ball.width, ball.height);
        context.closePath();

    }

    teamWin(text) {
        context.beginPath();
        context.font = "30px Verdana";
        // let  color1 = context.createLinearGradient(0, 0, 300, 0)
        //
        // color1.addColorStop("0,2", "magenta");
        // color1.addColorStop("0,5", "blue");
        // color1.addColorStop("0,8", "red");
        context.fillStyle = "black";
        context.fillText(text, ball.x, ball.y);

    }

}


