const fs = require("fs");
const os = require('os');

console.log(os.cpus().length);

// Sync...Blocking operations
// fs.writeFileSync("./test.txt", "hello world");


// Async -: Non-Blocking Operations
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

// // for next line
// fs.appendFileSync('./test.txt', 'nameste india\n');


// fs.copyFileSync('./test.txt', './copyfile');

// console.log(fs.statSync('./test.txt').isFile());



// Synchronous
// console.log("priyanka");

// const result = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(result);

// console.log("hello priyanka");



// Asynchronus
console.log("priyanka");

fs.readFile('./contacts.txt', 'utf-8', (err, result) =>{
    console.log(result);
    
})

console.log("hello priyanka");


// fs stand for file system
// utf-8 : file name encodeing

// default Thread pool Size = 4
// Max? - 8core cpu - 8