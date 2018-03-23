var path = require('path');
var yoTestHelpers = require('yeoman-test');
var yoTestAssert = require('yeoman-assert');
var {
    capitalizeFirstLetter
} = require('../helpers');

describe('itworxhub:rc', function () {
    const componentName = 'reactComponent';
    const templatePath = path.join(__dirname, '../generators/rc');

    describe('Create Style Sheet', function () {
        before(function (done) {
            yoTestHelpers.run(templatePath)
                .withArguments([componentName])
                .withPrompts({
                    hasStyleSheet: true
                })
                .on('end', done);
        });

        it('Inject componentName Argument', function () {
            yoTestAssert.fileContent(
                `${capitalizeFirstLetter(componentName)}/styles.scss`,
                `.${capitalizeFirstLetter(componentName)}Container {}`
            );
            yoTestAssert.fileContent(
                `${capitalizeFirstLetter(componentName)}/index.jsx`,
                `<div className='${capitalizeFirstLetter(componentName)}Container'>`
            );
            yoTestAssert.fileContent(
                `${capitalizeFirstLetter(componentName)}/index.jsx`,
                `${capitalizeFirstLetter(componentName)} extends React.Component{`
            );
        });
    });

    describe('Without Create Style Sheet', function () {
        before(function (done) {
            yoTestHelpers.run(templatePath)
                .withArguments([componentName])
                .withPrompts({
                    hasStyleSheet: false
                })
                .on('end', done);
        });

        it('Inject componentName Argument', function () {
            yoTestAssert.fileContent(
                `${capitalizeFirstLetter(componentName)}/index.jsx`,
                `<div className='${capitalizeFirstLetter(componentName)}Container'>`
            );
            yoTestAssert.fileContent(
                `${capitalizeFirstLetter(componentName)}/index.jsx`,
                `${capitalizeFirstLetter(componentName)} extends React.Component{`
            );
        });

    });
});