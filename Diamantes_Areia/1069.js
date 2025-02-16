const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function countDiamonds(s) {
    let diamonds = 0;
    const stack = [];

    for (const char of s) {
        if (char === '<') {
            stack.push(char);
        } else if (char === '>' && stack.length > 0) {
            stack.pop();
            diamonds++;
        }
    }

    return diamonds;
}

const N = parseInt(lines[0].trim());

for (let i = 1; i <= N; i++) {
    const s = lines[i].trim(); 
    const diamonds = countDiamonds(s); 
    console.log(diamonds); 
}