const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const N = parseInt(lines[0].trim());

const numbers = [];

for (let i = 1; i <= N; i++) {
    var num = parseInt(lines[i].trim());
    numbers.push(num);
}

const evens = numbers.filter(num => num % 2 === 0);
const odds = numbers.filter(num => num % 2 !== 0);

evens.sort((a, b) => a - b);

odds.sort((a, b) => b - a);

const result = evens.concat(odds);

for (var num of result) {
    console.log(num);
}