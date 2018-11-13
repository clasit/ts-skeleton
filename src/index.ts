import {Grid} from './lib/grid';

const grid = new Grid('canvas', 70, 70, 10);
grid.setBackgroundColor('#9C725C', '#000000');
grid.setCellColor('#FCCA46', '#000000');

const animationDelay = 300;
let pos = 0;

setInterval(() => {
        grid.clearCells();
        grid.drawCell(pos, pos);
        pos++;
    },
    animationDelay
);
