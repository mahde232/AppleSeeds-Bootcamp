const fs = require('fs');

fs.writeFileSync('notes.txt','This file was created by NodeJS.');
fs.copyFileSync('notes.txt','newFile.txt');
fs.copyFileSync('notes.txt','newFile1.txt');
fs.renameSync('newFile1.txt','newFile2.txt')
console.log(fs.readdirSync('./'));
fs.renameSync('newFile2.txt','newFile3.txt')