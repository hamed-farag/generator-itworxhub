var assert = require('assert');

var {
    capitalizeFirstLetter
} = require('../helpers');

describe('helpers', function () {
    describe('capitalizeFirstLetter', function () {
        it('First Case', function () {
            assert.equal(capitalizeFirstLetter('componentName'), 'ComponentName')
        });
        it('Second Case', function () {
            assert.equal(capitalizeFirstLetter('component Name'), 'Component Name')
        });
        it('Third Case', function () {
            assert.equal(capitalizeFirstLetter('component-Name'), 'Component-Name')
        });
        it('Fourth Case', function () {
            assert.equal(capitalizeFirstLetter('component_Name'), 'Component_Name')
        });
    });
});
