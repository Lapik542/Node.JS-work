import fs from 'fs';

const content = fs.readFileSync('./src/files/data.txt', 'utf8');

console.log(content);
