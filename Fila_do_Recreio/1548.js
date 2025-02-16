const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const N = parseInt(lines[0].trim());

for (let i = 1; i <= N; i++) {

    const M = parseInt(lines[2 * i - 1].trim());

    const notas = lines[2 * i].trim().split(' ').map(Number);

    const alunos = notas.map((nota, index) => ({ nota, posicaoOriginal: index }));

    alunos.sort((a, b) => b.nota - a.nota);

    let contador = 0;
    for (let j = 0; j < M; j++) {
        if (alunos[j].posicaoOriginal === j) {
            contador++;
        }
    }

    console.log(contador);
}