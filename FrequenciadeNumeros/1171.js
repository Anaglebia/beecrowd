const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const N = parseInt(lines[0].trim());

const frequency = {};

for (let i = 1; i <= N; i++) {
    const num = parseInt(lines[i].trim());
    frequency[num] = (frequency[num] || 0) + 1;
}

const sortedNumbers = Object.keys(frequency).map(Number).sort((a, b) => a - b);

for (const num of sortedNumbers) {
    const count = frequency[num];
    console.log(`${num} aparece ${count} vez(es)`);
}