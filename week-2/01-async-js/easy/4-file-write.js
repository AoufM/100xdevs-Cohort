const fs = require('fs');

const data = 'This is the data to write to the file.';

fs.writeFile('a.txt', data, (err) => {
  if (err) {
    throw err;
  }});

  fs.readFile('a.txt','utf-8',(err,data)=>{
     console.log(data)
  })