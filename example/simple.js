const socialScanner = require('../lib/index');

socialScanner('codekraft-studio', {}, (err, response) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
  console.log('Response:', response);
});