const fs = require('fs');

const folder = './';
const { readdir, rename } = fs;

readdir(folder, (err, filenames) => {
  if (err) {
    console.log('Got error:', err);
    throw err;
  }
  filenames.filter(filename => filename.endsWith('.wav'))
    .forEach((filename, i) => {
      const newFilename = filename.toLowerCase().replace(new RegExp(' ', 'g'), '-');
      if (newFilename !== filename) {
        console.log(`${filename} rename to ${newFilename}`);
        rename(`${folder}${filename}`, `${folder}${newFilename}`,
          err => err && console.log('Error:', err));
      }
      // print for rubix trader app-default
      const name = newFilename.split('.wav')[0].replace(new RegExp('-', 'g'), ' ');
      const id = i + 5;
      console.log(`{ id: ${id}, name: '${name}' },`);
    });
});
