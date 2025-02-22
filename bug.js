```javascript
const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function processFile(filePath) {
  try {
    const data = await readFile(filePath);
    // Process the data
    console.log(data);
  } catch (err) {
    console.error('Error processing file:', err);
  }
}

processFile('nonexistent.txt');
```