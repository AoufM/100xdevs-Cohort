const fs = require('fs');

const filePath = 'FileName.txt'; 


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedContent = data.replace(/\s+/g, ' ');

  fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
  });
});