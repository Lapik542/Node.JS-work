
// Sync method

// const content = fs.readFileSync('./src/files/data.json');
// fs.writeFileSync('./src/files/data.txt', content);

// const entry = JSON.parse(content.toString());
// console.log(entry);



// Callback method

// fs.readFile('./src/files/data.json', (err, content) => {
//     if (err) throw err;
//     const entry = JSON.parse(content.toString());
//     console.log(entry);
// });


// Async method
// const content = await fs.promises.readFile('./src/files/data.json');
// await fs.promises.writeFile('./src/files/data.txt', content);

// console.log(content.toString());



import fs from 'node:fs/promises';

const filePath = './src/files/data.txt';

const fileOperation = async ({action, data}) => {
switch(action) {
    case 'read':
        { const result = await fs.readFile(filePath, 'utf8');
        console.log(JSON.parse(result).message);
        break; }
    case 'add':
        { const append = await fs.appendFile(filePath, data);
             console.log(append);
        break; }
    case 'replace':
        { const replace = await fs.writeFile(filePath, data);
             console.log(replace);
        break; }
    case 'rename':
        fs.rename("text.txt", "newText.txt");
        fs.readFile()
        break;
    case 'delete':
    break;
    default:
        { console.log("Unkwnow action");
        break; }
        }
};

// fileOperation({action: "read"});

// fileOperation({action: "rename"});

fileOperation({action: "rename"});