"use strict";

require('colors');
const updater = require('npm-updater');
const figlet = require('figlet');

module.exports = function (context, callback) {
    var version = context ? 'v' + context.pkg.version : '';

    var logo = 'Welcome to\n'.magenta
                + figlet.textSync('TSX Earth').green
                + 'Please complete the following operation!\n'.magenta;


    logo = logo + ('This version is ' + version + ' \n\n').magenta;

    updater({
        package: context.pkg,
        level: 'patch',
        interval: '1s',
        abort: false,
        updateMessage: `你可以执行 npm i -g ${context.pkg.name}@latest 来安装此版本`
    }).then(() => {
        !process.LOGO_PRINTED && console.log(logo);
        process.LOGO_PRINTED = true;
        callback && callback();
    });
};
