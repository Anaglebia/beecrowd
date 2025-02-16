const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const N = parseInt(lines[0].trim());
for (let i = 1; i <= N; i++) {
    const text = lines[i].trim().toLowerCase();
    const frequency = {};

    for (const char of text) {
        if (/[a-z]/.test(char)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    let maxFreq = 0;
    for (const char in frequency) {
        if (frequency[char] > maxFreq) {
            maxFreq = frequency[char];
        }
    }

    const result = [];
    for (const char in frequency) {
        if (frequency[char] === maxFreq) {
            result.push(char);
        }
    }

    result.sort();

    console.log(result.join(''));
}