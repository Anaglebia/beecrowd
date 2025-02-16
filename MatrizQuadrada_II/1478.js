
let index = 0;

while (true) {
    const N = parseInt(lines[index++].trim());

    if (N === 0) {
        break;
    }

    const matriz = [];
    for (let i = 0; i < N; i++) {
        matriz[i] = [];
        for (let j = 0; j < N; j++) {
            const valor = Math.abs(i - j) + 1;

            matriz[i][j] = valor;
        }
    }

    for (let i = 0; i < N; i++) {
        let linha = '';
        for (let j = 0; j < N; j++) {

            linha += matriz[i][j].toString().padStart(3);
            if (j < N - 1) {
                linha += ' '; 
            }
        }
        console.log(linha);
    }
    console.log();
}