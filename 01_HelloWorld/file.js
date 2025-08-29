const fs = require("fs");


// Sync...
// fs.writeFileSync("./test.txt", "hello world");


// Async
// fs.writeFile("./test.txt", "hello world Async", (err) => {});


// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);


// Async : it will not return anything value and it accept a callback for error
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log("error", err);
//     } else {
//         console.log(result);
        
//     }
// });


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

// for next line
fs.appendFileSync('./test.txt', 'nameste india\n');


fs.copyFileSync('./test.txt', './copyfile');

console.log(fs.statSync('./test.txt').isFile());





// fs stand for file system
// utf-8 : file name encodeing