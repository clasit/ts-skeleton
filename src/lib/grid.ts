export class Grid {

    public gridHeight: number;
    public gridWidth: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(elementId: string,
                private rowsNumber: number,
                private colsNumber: number,
                private cellSizeInPixels: number,
                private fillBackgroundColor?: string,
                private fillCellColor?: string,
                private strokeCellColor?: string,
                private strokeBackgroundColor?: string) {
        this.setElementId(elementId);
        this.setBackgroundColor(fillBackgroundColor, fillCellColor);
        this.setCellColor(strokeCellColor, strokeBackgroundColor);
        this.gridHeight = this.rowsNumber * this.cellSizeInPixels;
        this.gridWidth = this.colsNumber * this.cellSizeInPixels;
        this.clearCells();
    }

    public clearCells() {
        this.canvas.height = this.gridHeight;
        this.canvas.width = this.gridWidth;
        this.context.fillStyle = this.fillBackgroundColor;
        this.context.strokeStyle = this.strokeBackgroundColor;
        this.context.fillRect(0, 0, this.gridWidth, this.gridHeight);
        this.context.strokeRect(0, 0, this.gridWidth, this.gridHeight);
    }

    public drawCell(col: number, row: number) {
        const x: number = col * this.cellSizeInPixels;
        const y: number = row * this.cellSizeInPixels;
        const w: number = this.cellSizeInPixels;
        this.context.fillStyle = this.fillCellColor;
        this.context.strokeStyle = this.strokeCellColor;
        this.context.fillRect(x, y, w, w);
        this.context.strokeRect(x, y, w, w);
    }

    public setElementId(elementId: string) {
        this.canvas = document.getElementById(elementId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
    }

    public setBackgroundColor(fillColor?: string, strokeColor?: string) {
        this.fillBackgroundColor = fillColor || '#000000';
        this.strokeBackgroundColor = strokeColor || fillColor;
    }

    public setCellColor(fillColor?: string, strokeColor?: string) {
        this.fillCellColor = fillColor || '#ffffff';
        this.strokeCellColor = strokeColor || fillColor;
    }
}
