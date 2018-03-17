var Generator = require('yeoman-generator'),
    yosay = require('yosay'),
    _ = require('lodash'),
    chalk = require('chalk');

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
        const componentName = this.options.componentName;
        this.fs.copyTpl(
            this.templatePath('reactDumpComponent.js'),
            this.destinationPath(`${componentName}/index.jsx`), {
                componentName: _.camelCase(componentName),
                hasStyleSheet: this.hasStyleSheet
            }
        );

        if (this.hasStyleSheet) {
            this.fs.copyTpl(
                this.templatePath('reactDumpComponent.scss'),
                this.destinationPath(`${componentName}/styles.scss`), {
                    componentName: _.camelCase(componentName)
                }
            );
        }
    }
    conflicts() {}
    install() {}
    end() {}
};