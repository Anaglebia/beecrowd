var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function jornadaNasEstrelas(N, carneiros) {
    let visitados = new Array(N).fill(false);
    let estrelasAtacadas = 0;
    let totalCarneiros = 0;
    let i = 0;

    while (i >= 0 && i < N) {
        if (!visitados[i]) {
            estrelasAtacadas++; 
            visitados[i] = true;
        }

        if (carneiros[i] > 0) {
            carneiros[i]--;
        }


        if (carneiros[i] % 2 === 1) {
            i++; 
        } else {
            i--;
        }
    }

   
    totalCarneiros = carneiros.reduce((acc, val) => acc + val, 0);

    return [estrelasAtacadas, totalCarneiros];
}


const N = parseInt(lines[0]);
const carneiros = lines[1].split(' ').map(Number);

const [estrelasAtacadas, totalCarneiros] = jornadaNasEstrelas(N, carneiros);
console.log(estrelasAtacadas, totalCarneiros);