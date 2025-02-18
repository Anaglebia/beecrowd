
function processarFrase() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (frase) => {
        let negrito = 0;
        let italico = 0;
        let n = frase.length;
        let resultado = '';

        for (let i = 0; i < n; ++i) {
            if (frase[i] === '_') {
                resultado += italico ? '</i>' : '<i>';
                italico = 1 - italico;
            } else if (frase[i] === '*') {
                resultado += negrito ? '</b>' : '<b>';
                negrito = 1 - negrito;
            } else {
                resultado += frase[i];
            }
        }

        console.log(resultado);
    });
}

processarFrase();
