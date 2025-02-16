const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function countAnagrams(s) {
    const charCount = {};
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let numerator = factorial(s.length);
    let denominator = 1;
    for (let key in charCount) {
        denominator *= factorial(charCount[key]);
    }

    return numerator / denominator;
}

function main() {
    let index = 0;
    while (true) {
        const S = lines[index++].trim();
        if (S === '0') break; 

        const anagramCount = countAnagrams(S);
        console.log(anagramCount);
    }
}

main();