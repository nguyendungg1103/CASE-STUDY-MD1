document.addEventListener('keydown', function (e) {

    // listen to keyboard events to move the paddles
    if (e.keyCode === 38) {
        rightPaddle.dy = -paddleSpeed;
    }
    // phím mũi tên xuống
    else if (e.keyCode === 40) {
        rightPaddle.dy = paddleSpeed;
    }

    // w key
    if (e.keyCode === 87) {
        leftPaddle.dy = -paddleSpeed;
    }
    // a key
    else if (e.keyCode === 83) {
        leftPaddle.dy = paddleSpeed;
    }
});

//lắng nghe các sự kiện bàn phím để dừng paddlkeyCode phím được nhả ra
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
        rightPaddle.dy = 0;
    }

    if (e.keyCode === 83 || e.keyCode === 87) {
        leftPaddle.dy = 0;
    }
});