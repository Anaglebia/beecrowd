const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function translateToHTML(text) {
    let italic = true;
    text = text.replace(/_/g, () => {
        italic = !italic;
        return italic ? '</i>' : '<i>';
    });
    let bold = true;
    text = text.replace(/\*/g, () => {
        bold = !bold;
        return bold ? '</b>' : '<b>';
    });

    return text;
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); 
    if (line === '') continue; 
    const translatedText = translateToHTML(line);
    console.log(translatedText);
}