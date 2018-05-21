/* eslint-disable */
var exec = require('child_process').exec;
exec('yarn --version', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 0.16) {
    throw new Error('[ERROR: React Boilerplate] You need yarn version @>=0.16');
    process.exit(1);
  }
});
