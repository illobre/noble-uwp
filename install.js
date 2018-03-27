const { exec } = require('child_process');

if (process.env == 'win32')
exec('install.cmd');
