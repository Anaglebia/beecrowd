const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function translateLyrics(dictionary, lyrics) {
    return lyrics.map(line => {
        return line.split(' ').map(word => dictionary[word] || word).join(' ');
    });
}

function main() {
    let index = 0;
    const T = parseInt(lines[index++]);

    for (let t = 0; t < T; t++) {
        const [M, N] = lines[index++].split(' ').map(Number);

        const dictionary = {};
        for (let i = 0; i < M; i++) {
            const japanese = lines[index++];
            const portuguese = lines[index++];
            dictionary[japanese] = portuguese;
        }

        const lyrics = [];
        for (let i = 0; i < N; i++) {
            lyrics.push(lines[index++]);
        }

        const translatedLyrics = translateLyrics(dictionary, lyrics);
        translatedLyrics.forEach(line => console.log(line));
        console.log(); 
    }
}

main();