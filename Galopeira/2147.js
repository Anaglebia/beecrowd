const C = parseInt(lines[0].trim());

for (let i = 1; i <= C; i++) {
    const palavra = lines[i].trim(); 
    const tempo = palavra.length * 0.01; 
    console.log(tempo.toFixed(2));
}