const fs = require('fs/promises');
const path = require('path');

const filesArray = []

const secretFoler = path.join(__dirname, "secret-folder")

fs.readdir(secretFoler, { withFileTypes: true })
    .then(items => {
        for (const item of items) {
            if (!item.isDirectory()) {
                filesArray.push(item)
            }
        }
        filesArray.forEach(file => {
            fs.stat(path.join(__dirname, "secret-folder", file.name))
                .then(stat => {
                    console.log(`${path.parse(file.name).name} - ${(path.extname(file.name)).slice(1)} - ${(stat.size / 1024).toFixed(2)}kb`);
                })
        })
    })
    .catch(err => {
        console.error(err);
    });
