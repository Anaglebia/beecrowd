var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function startTrek() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
    
    const N = parseInt(input[0].trim(), 10);
    const carneiro = input[1].trim().split(' ').map(Number);
    const estrela = Array(N).fill(0);

    let totalEstrela = 0;
    let totalCarneiro = 0;

    let j = 0;

    while (true) {
        if (j === 0 && carneiro[j] % 2 === 0) {
            estrela[j] = 1;
            if (carneiro[j] > 0) carneiro[j]--;
            break;
        } else if (j === (N - 1) && carneiro[j] % 2 === 1) {
            estrela[j] = 1;
            if (carneiro[j] > 0) carneiro[j]--;
            break;
        } else if (carneiro[j] % 2 === 1) {
            if (carneiro[j] > 0) carneiro[j]--;
            estrela[j] = 1;
            j++;
        } else if (carneiro[j] % 2 === 0) {
            estrela[j] = 1;
            if (carneiro[j] > 0) carneiro[j]--;
            j--;
        }
    }

    for (let i = 0; i < N; i++) {
        totalCarneiro += carneiro[i];
        totalEstrela += estrela[i];
    }

    console.log(`${totalEstrela} ${totalCarneiro}`);
}

startTrek();
