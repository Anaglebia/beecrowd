const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function processBeiju(text) {
    let result = [];
    let prefix = [];
    let isHome = false;

    for (let char of text) {
        if (char === '[') {
          
            isHome = true;
            
            result.unshift(...prefix);
            prefix = [];
        } else if (char === ']') {
           
            isHome = false;
            
            result.unshift(...prefix);
            prefix = [];
        } else {
            
            if (isHome) {
                prefix.push(char);
            } else {
                result.push(char);
            }
        }
    }

    if (prefix.length > 0) {
        result.unshift(...prefix);
    }

    return result.join('');
}


for (let line of lines) {
    if (line.trim() === '') continue; 
    console.log(processBeiju(line));
}