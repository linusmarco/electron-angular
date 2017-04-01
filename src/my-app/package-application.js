var packager = require('electron-packager');

const osType = process.argv[2];

var options = {};
options.dir = '.';
options.ignore = ['node_modules'];
options.out = './release-builds';
options.overwrite = true;
options.prune = true;

switch (osType) {
    case "mac":
        options.platform = 'darwin';
        options.arch = 'x64';
        break;
    case "win32bit":
        options.platform = 'win32';
        options.arch = 'ia32';
        options.asar = true;
        break;
    case "win64bit":
        options.platform = 'win32';
        options.arch = 'x64';
        options.asar = true;
        break;
    case "linux":
        options.platform = 'linux';
        options.arch = 'x64';
        break;
}

packager(options, function done_callback(err, appPaths) {
    console.log(err);
    console.log(appPaths);
});
