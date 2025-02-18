const fs = require('fs');

var input = fs.readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const LMAX = 21;
const CMAX = 31;

function max(a, b) {
    return a > b ? a : b;
}

function processarEntrada() {
    let lineIndex = 0;
    while (lineIndex < lines.length) {

        const N = parseInt(lines[lineIndex++].trim(), 10);
        
        if (N === 0) break;
        const P = parseInt(lines[lineIndex++].trim(), 10);
    
        const array = [];
        for (let i = 0; i < N; i++) {
            const [tempo, pizzas] = lines[lineIndex++].trim().split(' ').map(Number);
            array.push({ tempo, pizzas });
        }

        const matriz = Array.from({ length: N + 1 }, () => Array(P + 1).fill(0));

        for (let i = 1; i <= N; i++) {
            for (let j = 0; j <= P; j++) {
                if (array[i - 1].pizzas > j) {
                    matriz[i][j] = matriz[i - 1][j];
                } else {
                    matriz[i][j] = max(matriz[i - 1][j - array[i - 1].pizzas] + array[i - 1].tempo, matriz[i - 1][j]);
                }
            }
        }

        console.log(`${matriz[N][P]} min.`);
    }
}

processarEntrada();
