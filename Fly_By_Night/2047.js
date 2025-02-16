const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

class Graph {
    constructor() {
        this.adj = new Map();
    }

    addEdge(u, v, capacity) {
        if (!this.adj.has(u)) this.adj.set(u, []);
        if (!this.adj.has(v)) this.adj.set(v, []);
        this.adj.get(u).push({ v, capacity, flow: 0 });
        this.adj.get(v).push({ v: u, capacity: 0, flow: 0 }); // Aresta reversa
    }

    bfs(s, t, parent) {
        const visited = new Set();
        const queue = [];
        queue.push(s);
        visited.add(s);
        parent.set(s, null);

        while (queue.length > 0) {
            const u = queue.shift();
            for (const edge of this.adj.get(u) || []) {
                if (!visited.has(edge.v) && edge.capacity - edge.flow > 0) {
                    parent.set(edge.v, u);
                    visited.add(edge.v);
                    queue.push(edge.v);
                    if (edge.v === t) return true;
                }
            }
        }
        return false;
    }

    fordFulkerson(s, t) {
        let maxFlow = 0;
        const parent = new Map();

        while (this.bfs(s, t, parent)) {
            let pathFlow = Infinity;
            for (let v = t; v !== s; v = parent.get(v)) {
                const u = parent.get(v);
                const edge = this.adj.get(u).find(e => e.v === v);
                pathFlow = Math.min(pathFlow, edge.capacity - edge.flow);
            }

            for (let v = t; v !== s; v = parent.get(v)) {
                const u = parent.get(v);
                const edge = this.adj.get(u).find(e => e.v === v);
                edge.flow += pathFlow;
                const reverseEdge = this.adj.get(v).find(e => e.v === u);
                reverseEdge.flow -= pathFlow;
            }

            maxFlow += pathFlow;
        }
        return maxFlow;
    }
}

function solve() {
    let instance = 1;
    let index = 0;

    while (index < lines.length) {
        const m = parseInt(lines[index++]);
        if (m === 0) break;

        const cities = [];
        let totalPassengers = 0;
        for (let i = 0; i < m; i++) {
            const [city, passengers] = lines[index++].trim().split(/\s+/);
            cities.push({ city, passengers: parseInt(passengers) });
            totalPassengers += parseInt(passengers);
        }

        const [n, destination] = lines[index++].trim().split(/\s+/);
        const flights = [];
        for (let i = 0; i < n; i++) {
            const [from, to, seats] = lines[index++].trim().split(/\s+/);
            flights.push({ from, to, seats: parseInt(seats) });
        }

        const graph = new Graph();
        const source = 'source';
        const sink = destination;
        
        for (const city of cities) {
            graph.addEdge(source, city.city, city.passengers);
        }

    
        for (const flight of flights) {
            graph.addEdge(flight.from, flight.to, flight.seats);
        }

        const maxFlow = graph.fordFulkerson(source, sink);

        console.log(`Instancia ${instance}`);
        console.log(maxFlow >= totalPassengers ? 'viavel' : 'inviavel');
        console.log();

        instance++;
    }
}

solve();