const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calcularTotalFeira() {
    let lineIndex = 0;
    
    
    const n = parseInt(lines[lineIndex].trim());
    lineIndex++;
    
    for (let i = 0; i < n; i++) {
    
        const m = parseInt(lines[lineIndex].trim());
        lineIndex++;
        
        let produtos = {};
        
        
        for (let j = 0; j < m; j++) {
            let [nome, preco] = lines[lineIndex].trim().split(" ");
            produtos[nome] = parseFloat(preco);
            lineIndex++;
        }
        
    
        const p = parseInt(lines[lineIndex].trim());
        lineIndex++;
        
        let total = 0;
        
    
        for (let k = 0; k < p; k++) {
            let [produto, quantidade] = lines[lineIndex].trim().split(" ");
            quantidade = parseInt(quantidade);
            total += produtos[produto] * quantidade;
            lineIndex++;
        }

       
        console.log(`R$ ${total.toFixed(2)}`);
    }
}

calcularTotalFeira();
