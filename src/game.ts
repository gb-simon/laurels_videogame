function button_alert() {
    alert('button is working');
}

export class LaurelsGame {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor() {
        this.canvas = document.createElement("canvas");

        this.ctx = this.canvas.getContext("2d")!;
        document.body.appendChild(this.canvas);
        this.ctx.fillStyle = "#00FF00";
        this.ctx.fillRect(0, 0, 100, 100);
    }
}
