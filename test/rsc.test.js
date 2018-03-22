var path = require('path');
var yoTestHelpers = require('yeoman-test');
var yoTestAssert = require('yeoman-assert');


describe('itworxhub:rsc', function () {
	const componentName = 'reactStatelessComponent';
	before(function (done) {
		yoTestHelpers.run(path.join(__dirname, '../generators/rsc'))
			.withArguments([componentName])
			.withPrompts({
				hasStyleSheet: true
			})
			.on('end', done);
	});

	it('Inject componentName Argument', function () {
		yoTestAssert.fileContent(
			`${componentName}/styles.scss`,
			`.${componentName}Container {}`
		);
		yoTestAssert.fileContent(
			`${componentName}/index.jsx`,
			`<div className='${componentName}Container'>`
		);
	});
});