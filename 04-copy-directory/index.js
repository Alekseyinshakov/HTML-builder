const fs = require('fs');
const path = require('path')

const folderPath = path.join(__dirname, 'files-copy');
const origPath = path.join(__dirname, 'files');


function copyDir() {
  removeAndCreateFolder()
}

function removeAndCreateFolder() {
  fs.rm(folderPath, { recursive: true }, (err) => {
    createFolder();
  });
}

function createFolder() {
  fs.mkdir(folderPath, (err) => {
    if (err) throw err;

    fs.readdir(origPath, { withFileTypes: true }, (err, items) => {
      items.forEach(item => {
        const source = path.join(__dirname, 'files', item.name);
        const destination = path.join(__dirname, 'files-copy', item.name);

        const readStream = fs.createReadStream(source);
        const writeStream = fs.createWriteStream(destination);

        readStream.pipe(writeStream);
      })
    })
  });
}

copyDir();