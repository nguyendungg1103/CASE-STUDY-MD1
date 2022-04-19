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
        this.img = document.getElementById('imgtank');
    }

    draw() {
        context.beginPath();
        context.fillStyle = "white";
        // context.fillRect(0, 0, canvas.width, grid);
        for (let i = 0; i < canvas.width; i += grid * 2) {
            // context.fillRect(i + grid, 0, grid * 2, grid);
            // context.drawImage(img, i + grid, 0, grid * 2, grid * 2)
        }
        // context.fillRect(0, canvas.height - grid, canvas.width, canvas.height)
        for (let i = 0; i < canvas.width; i += grid * 3) {
            // context.fillRect(i + grid, canvas.height - grid, grid * 2, grid);
            // context.drawImage(img, i + grid, canvas.height - grid * 2, grid * 2, grid * 2)
        }
        context.closePath()

    }


    drawPaddle() {

        // context.beginPath();
        // context.fillRect(this.paddleLeft.x, this.paddleLeft.y, this.paddleLeft.width, this.paddleLeft.height);
        // context.fillRect(this.paddleRight.x, this.paddleRight.y, this.paddleRight.width, this.paddleRight.height);
        // // context.fillRect(ball.x, ball.y, ball.width, ball.height);
        // context.closePath();

    }

    teamWin(text) {
        context.beginPath();
        context.font = "30px Verdana";
        // let  color1 = context.createLinearGradient(0, 0, 300, 0)
        //
        // color1.addColorStop("0,2", "magenta");
        // color1.addColorStop("0,5", "blue");
        // color1.addColorStop("0,8", "red");
        context.fillStyle = "white";
        context.fillText(text, ball.x - 50, ball.y);

    }

}


