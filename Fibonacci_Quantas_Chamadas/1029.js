const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function fibonacci(n, calls = { count: 0 }) {
    calls.count++;

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1, calls) + fibonacci(n - 2, calls);
}

const N = parseInt(lines[0].trim());


for (let i = 1; i <= N; i++) {
    const X = parseInt(lines[i].trim()); 
    const calls = { count: 0 };

    const result = fibonacci(X, calls);

    console.log(`fib(${X}) = ${calls.count - 1} calls = ${result}`);
}