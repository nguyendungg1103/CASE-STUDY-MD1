const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 15;
const paddleHeight = grid * 10; // 75
const maxPaddleY = canvas.height - grid - paddleHeight;
let right = 0;
let left = 0;


let paddleSpeed = 6;
let ballSpeed = 4;

const leftPaddle = {
    // bắt đầu trò chơi ở phía bên trái
    x: grid * 2,
    y: canvas.height/2  - paddleHeight/2 ,
    width: grid,
    height: paddleHeight,

    // Vận tốc mái chèo.
    dy: 0
};
const rightPaddle = {
    // người chơi phía bên phải
    x: canvas.width - grid * 2,
    y: canvas.height /2 - paddleHeight /2,
    width: grid,
    height: paddleHeight,

    // vận tốc mái chèo
    dy: 0
};
const ball = {
    // bắt đầu ở giữa trò chơi
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: grid,
    height: grid,

    // theo dõi khi nào cần đặt vị trí bóng
    resetting: false,

    // vận tốc bóng, bắt đầu trên góc trên cùng bên phải
    dx: ballSpeed,
    dy: -ballSpeed,
};
function object() {
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(leftPaddle.x,leftPaddle.y, leftPaddle.width, leftPaddle.height);
    context.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
    context.fillRect(ball.x, ball.y, ball.width, ball.height);
    context.closePath();
    //vẽ tường
    context.beginPath();
    context.fillStyle = 'white';
    for (let i = 0; i < canvas.width; i += grid*3) {
        context.fillRect(i + grid, 0, grid*2, grid);
    }
    for (let i = 0; i < canvas.width; i += grid*3) {
        context.fillRect(i + grid, canvas.height - grid, grid*2, grid);
    }
    context.closePath();

}



