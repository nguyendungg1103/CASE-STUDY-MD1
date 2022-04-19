const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 15;
const paddleHeight = grid * 10; //150
const maxPaddleY = canvas.height - grid - paddleHeight;
let right = 0;
let left = 0;


let paddleSpeed = 6;
let ballSpeed = 4;

let ball = new Ball(grid + 20, ballSpeed);

let paddle = new Paddle();
// let img = document.getElementById('imgtank');


function object() {
    ball.draw();
    paddle.draw();
    paddle.drawPaddle();

    // vẽ tường
    // context.beginPath();
    // for (let i = 0; i < canvas.width; i += grid * 3) {
    //     context.fillRect(i + grid, 0, grid * 2, grid);
    //     // context.drawImage(img, i + grid, 0, grid * 2, grid)
    // }
    // for (let i = 0; i < canvas.width; i += grid * 3) {
    //     context.fillRect(i + grid, canvas.height - grid, grid * 2, grid);
    //     // context.drawImage(img, i + grid, canvas.height - grid, grid * 2, grid)
    // }
    // context.closePath();

}

function start() {
    let hidden = document.getElementById("start").hidden = true;
    hidden = true;
    if (hidden) {
        requestAnimationFrame(loop);


    }


}



