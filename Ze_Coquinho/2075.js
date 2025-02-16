const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function isWellFormed(sculpture) {
    let balance = 0;
    for (let char of sculpture) {
        if (char === '(') balance++;
        else balance--;
        if (balance < 0) return false;
    }
    return balance === 0;
}

function generateMalformedSculptures(N, K) {
    let count = 0;
    let result = '';

    function backtrack(current, open, close) {
        if (current.length === N) {
            if (!isWellFormed(current)) {
                if (count === K) {
                    result = current;
                    return true;
                }
                count++;
            }
            return false;
        }

      
        if (open < N / 2) {
            if (backtrack(current + '(', open + 1, close)) return true;
        }

        if (close < N / 2) {
            if (backtrack(current + ')', open, close + 1)) return true;
        }

        return false;
    }

    backtrack('', 0, 0);
    return result || '-1';
}


const T = parseInt(lines[0]);


for (let i = 1; i <= T; i++) {
    const [N, K] = lines[i].split(' ').map(Number);
    console.log(generateMalformedSculptures(N, K));
}