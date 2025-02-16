const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function processDeck(n) {
    const deck = [];
    for (let i = 1; i <= n; i++) {
        deck.push(i);
    }

    const discarded = [];

    while (deck.length >= 2) {
        discarded.push(deck.shift());
        deck.push(deck.shift()); 
    }

    console.log(`Discarded cards: ${discarded.join(', ')}`);
    console.log(`Remaining card: ${deck[0]}`);
}

for (const line of lines) {
    const n = parseInt(line.trim());
    if (n === 0) break;
    if (n >= 1 && n <= 50) { 
        processDeck(n);
    }
}