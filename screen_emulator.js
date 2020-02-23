const Canvas = function (width, height) {
    this.width = width;
    this.height = height;
    let xRatio = 1.0;
    let yRatio = 1.0;

    this.init = function () {
        this.canvasElement = document.getElementById("myCanvas");
        xRatio = this.canvasElement.clientWidth / this.width;
        yRatio = this.canvasElement.clientHeight / this.height;
        this.draw();
    };

    const pixels = new Array(height);
    for (let i = 0; i < height; i++) {
        pixels[i] = new Array(width);
        for (let j = 0; j < width; j++) {
            pixels[i][j] = 'black';
        }
    }

    this.draw = function () {
        const ctx = this.canvasElement.getContext("2d");
        ctx.beginPath();
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                ctx.fillStyle = pixels[i][j];
                ctx.fillRect(j * xRatio, i * yRatio, xRatio, yRatio);
            }
        }
        ctx.fill();
    };

    this.getPixel = ((x, y) => pixels[y][x]);
    this.setPixel = function (x, y, colour) {
        const previousValue = this.getPixel(x, y);
        pixels[y][x] = colour;
        this.draw();
        return previousValue
    };
};

window.canvas = new Canvas(80, 25);
