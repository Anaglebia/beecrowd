const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculateDeliveryTime(N, P, orders) {
    
    orders.sort((a, b) => b.time - a.time);

    let totalTime = 0;
    let totalPizzas = 0;

    for (let order of orders) {
        if (totalPizzas + order.pizzas <= P) {
            totalTime += order.time;
            totalPizzas += order.pizzas;
        } else {
            
            continue;
        }
        if (totalPizzas >= P) break;
    }

    return totalTime;
}

function main() {
    let index = 0;
    while (true) {
        const N = parseInt(lines[index++]);
        if (N === 0) break; 

        const P = parseInt(lines[index++]);
        const orders = [];
        for (let i = 0; i < N; i++) {
            const [time, pizzas] = lines[index++].split(' ').map(Number);
            orders.push({ time, pizzas });
        }

        const totalTime = calculateDeliveryTime(N, P, orders);
        console.log(`${totalTime} min.`);
    }
}

main();