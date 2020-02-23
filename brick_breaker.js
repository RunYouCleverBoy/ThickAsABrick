const boardWidth = 80;
const boardHeight = 25;
const bricksHeight = 5;
const bricksStartAt = 3;
const bricksGap = 1;
const playerWidth = 10;

let playerX = boardWidth / 2;
let ballX = 0;
let ballY = 0;

const bricksColours = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#808000'];

function drawPlayer(x, width) {
    let a = x + width / 2;
    let start = x - width / 2;

    if (a - boardWidth >= 0) return false;
    if (start < 0) return false;

    do {
        canvas.setPixel(a, boardHeight - 2, '#ffffff');
        a--;
    } while (a - start >= 0);

    return true;
}

function drawBricks() {
    let y = bricksHeight;

    function colourForBrick(x, y) {
        if ((x & 7) !== 0) return bricksColours[y]; else return 'black';
    }

    do {
        let x = boardWidth;
        do {
            let by = y * (bricksGap + 1) + bricksStartAt;
            canvas.setPixel(x, by, colourForBrick(x, y));
            x--;
        } while (x > 0);
        y--;
    } while (y > 0);
}

function drawBall(x, y) {
    canvas.setPixel(x, y, '#ff00c0')
}

function init() {
    ballX = playerX;
    ballY = boardHeight - 3;
    drawBricks();

    drawPlayer(playerX, playerWidth);

    drawBall(ballX, ballY)
}
