const fs = require('fs');

// fs.writeFileSync('./hello.txt', 'Hello, World!');

// fs.writeFile('./helloasync.txt', 'Hello, Async World!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }
//     else {
//         console.log('File created successfully!');
//     }

// });

// const read = fs.createReadStream('./hello.txt', 'utf-8');

// read.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });

// read.on('error', (err) => {
//     console.error('Error reading file:', err);
// });

// read.on('end', () => {
//     console.log('Finished reading file.');
// });

// const read = fs.readFileSync('./hello.txt', 'utf-8');
// console.log(read);

fs.readFile('./helloasync.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    else {
        console.log(data);
    }
});
