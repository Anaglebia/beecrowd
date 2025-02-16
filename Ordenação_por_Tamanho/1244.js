const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function sortByLength(words) {
    
    return words.sort((a, b) => a.length - b.length);
}

function main() {
    let index = 0;
    const N = parseInt(lines[index++]);

    for (let i = 0; i < N; i++) {
        const words = lines[index++].split(' ');
        const sortedWords = sortByLength(words);
        console.log(sortedWords.join(' '));
    }
}

main();