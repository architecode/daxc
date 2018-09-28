const shell = require('shelljs');

shell.rm('-rf', '.nyc_output');
shell.rm('-rf', 'dist');
shell.rm('-rf', 'dst');
shell.rm('-rf', 'typings');
