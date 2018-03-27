const cp = require('child_process');

if (process.platform == 'win32')
	cp.execSync("npm run install:windows",{stdio:[0,1,2]});
