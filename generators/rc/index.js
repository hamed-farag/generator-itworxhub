var Generator = require('yeoman-generator'),
    yosay = require('yosay'),
    _ = require('lodash'),
    chalk = require('chalk');

var {
    capitalizeFirstLetter
} = require('../../helpers');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('componentName', {
            type: String,
            required: true
        });
    }

    initializing() {}
    prompting() {
        var done = this.async();
        this.prompt([{
            type: 'confirm',
            name: 'hasStyleSheet',
            message: 'Create style sheet for this component',
            default: 'true'
        }]).then((answers) => {
            this.hasStyleSheet = answers.hasStyleSheet;
            this.log(this.options.componentName);
            done();
        })
    }
    configuring() {}
    writing() {
        const componentName = capitalizeFirstLetter(_.camelCase(this.options.componentName));
        this.fs.copyTpl(
            this.templatePath('reactComponent.js'),
            this.destinationPath(`${componentName}/index.jsx`), {
                componentName: componentName,
                hasStyleSheet: this.hasStyleSheet
            }
        );

        if (this.hasStyleSheet) {
            this.fs.copyTpl(
                this.templatePath('reactComponent.scss'),
                this.destinationPath(`${componentName}/styles.scss`), {
                    componentName: componentName
                }
            );
        }
    }
    conflicts() {}
    install() {}
    end() {
        this.log(chalk.yellow('React Component Created Successfully!'));
    }
};