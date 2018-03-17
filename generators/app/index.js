var Generator = require('yeoman-generator'),
    yosay = require('yosay'),
    _ = require('lodash'),
    chalk = require('chalk');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {}
    prompting() {
        this.log(yosay(`Welcome to ${chalk.yellow('ITWORX HUB')} generator!`));
        this.log(`You can use 'yo itworxhub:rsc [options] <componentName>' to generate stateless componet`)
    }
    configuring() {}
    writing() {}
    conflicts() {}
    install() {}
    end() {}
};