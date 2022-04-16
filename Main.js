// check va cham bong
function collides(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y;
}

// vòng lặp trò chơi
function loop() {
    requestAnimationFrame(loop);// giup vong lap chay on dinh hon
    context.clearRect(0,0,canvas.width,canvas.height);
    object();

    // di chuyển mái chèo bằng vận tốc của chúng
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;

    // check ngăn mái chèo xuyên qua tường
    if (leftPaddle.y < grid) {
        leftPaddle.y = grid;
    }
    else if (leftPaddle.y > maxPaddleY) {
        leftPaddle.y = maxPaddleY;
    }

    if (rightPaddle.y < grid) {
        rightPaddle.y = grid;
    }
    else if (rightPaddle.y > maxPaddleY) {
        rightPaddle.y = maxPaddleY;
    }


    //chuyển động quả bóng bằng vận tốc của nó
    ball.x += ball.dx;
    ball.y += ball.dy;

    // ngăn quả bóng xuyên qua tường bằng cách thay đổi vận tốc của nó.
    if (ball.y < grid) {
        ball.y = grid;
        ball.dy *= -1;
    }
    else if (ball.y + grid > canvas.height - grid) {
        ball.y = canvas.height - grid * 2;
        ball.dy *= -1;
    }

    // đặt lại bóng nếu nó đi qua mái chèo.
    if ( (ball.x < 0 || ball.x > canvas.width) && !ball.resetting) {
        ball.resetting = true;

        // cho thời gian để người chơi khôi phục trước tung bóng trở lại
        setTimeout(() => {
            ball.resetting = false;
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
        }, 400);
    }

    // kiểm tra bóng có va chạm với mái chèo , nếu người chơi thay đổi  vận tốc.
    if (collides(ball, leftPaddle)) {
        ball.dx *= -1;

        // di chuyển quả bóng bên cạnh mái chèo nếu không sẽ sảy ra va chạm lần nữa
        // trong khung tiếp theo.
        ball.x = leftPaddle.x + leftPaddle.width;
    }
    else if (collides(ball, rightPaddle)) {
        ball.dx *= -1;

        // di chuyển quả bóng bên cạnh mái chèo nếu không sẽ sảy ra va chạm lần nữa

        // trong khung tiếp theo.
        ball.x = rightPaddle.x - ball.width;
    }





    // vẽ đường chấm ở giữa.
    for (let i = grid; i < canvas.height - grid; i += grid * 2) {
        context.fillRect(canvas.width / 2 - grid / 2, i, grid, grid);
    }
}
