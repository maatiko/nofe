const fs = require('fs');

console.log(process.hrtime()[0]/60);

const dados = fs.readFileSync("file.txt")

console.log("Executando o console após o arquivo");