const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function buildMatrix(N) {
    const matrix = [];
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            const value = Math.min(i, j, N - 1 - i, N - 1 - j) + 1;
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let row of matrix) {
        const formattedRow = row.map(value => String(value).padStart(3)).join(' ');
        console.log(formattedRow);
    }
    console.log();
}

function main() {
    let index = 0;
    while (true) {
        const N = parseInt(lines[index++]);
        if (N === 0) break; 

        const matrix = buildMatrix(N);
        printMatrix(matrix);
    }
}

main();