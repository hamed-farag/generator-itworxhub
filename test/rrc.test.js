var path = require('path');
var yoTestHelpers = require('yeoman-test');
var yoTestAssert = require('yeoman-assert');
var {
    capitalizeFirstLetter
} = require('../helpers');

describe('itworxhub:rrc -> React Redux Component', function () {
    const componentName = 'reactReduxComponent';
    const capitalizeComponentName = capitalizeFirstLetter(componentName);
    const templatePath = path.join(__dirname, '../generators/rrc');

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
                `${capitalizeComponentName}/styles.scss`,
                `.${capitalizeComponentName}Container {}`
            );
            yoTestAssert.fileContent(
                `${capitalizeComponentName}/index.jsx`,
                `export default class ${capitalizeComponentName} extends React.Component {`
            );
            yoTestAssert.fileContent(
                `${capitalizeComponentName}/index.jsx`,
                `<div className='${capitalizeComponentName}Container'>`
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
                `${capitalizeComponentName}/index.jsx`,
                `<div className='${capitalizeComponentName}Container'>`
            );
            yoTestAssert.fileContent(
                `${capitalizeComponentName}/index.jsx`,
                `export default class ${capitalizeComponentName} extends React.Component {`
            );
        });
    });
});