const { exec } = require('child_process');

if (process.platform == 'win32')
	exec('install.cmd');
