const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let index = 0;

while (index < lines.length) {

    const N = parseInt(lines[index++].trim());
    if (isNaN(N)) break;

    const custoPorDia = parseInt(lines[index++].trim());

    const receitas = [];
    for (let i = 0; i < N; i++) {
        receitas.push(parseInt(lines[index++].trim()));
    }

    let maxLucro = 0;
    let lucroAtual = 0;

    for (let i = 0; i < N; i++) {

        lucroAtual += receitas[i] - custoPorDia;

        if (lucroAtual < 0) {
            lucroAtual = 0;
        }

 
        if (lucroAtual > maxLucro) {
            maxLucro = lucroAtual;
        }
    }
    console.log(maxLucro);
}