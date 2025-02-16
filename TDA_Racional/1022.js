const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(numerator, denominator) {
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    return [numerator / divisor, denominator / divisor];
}

const N = parseInt(lines[0].trim());

for (let i = 1; i <= N; i++) {
    const [N1, _, D1, op, N2, __, D2] = lines[i].trim().split(' ');

    const num1 = parseInt(N1);
    const den1 = parseInt(D1);
    const num2 = parseInt(N2);
    const den2 = parseInt(D2);

    let resultNum, resultDen;

    switch (op) {
        case '+':
            resultNum = num1 * den2 + num2 * den1;
            resultDen = den1 * den2;
            break;
        case '-':
            resultNum = num1 * den2 - num2 * den1;
            resultDen = den1 * den2;
            break;
        case '*':
            resultNum = num1 * num2;
            resultDen = den1 * den2;
            break;
        case '/':
            resultNum = num1 * den2;
            resultDen = num2 * den1;
            break;
        default:
            throw new Error(`Operação inválida: ${op}`);
    }

    const [simplifiedNum, simplifiedDen] = simplifyFraction(resultNum, resultDen);

    console.log(`${resultNum}/${resultDen} = ${simplifiedNum}/${simplifiedDen}`);
}