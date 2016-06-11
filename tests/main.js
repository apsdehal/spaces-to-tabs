var assert = require('assert');
var fs = require('fs');
var main = require('../src/api.js')

describe('Spaces to Tabs', function () {
  it('should convert properly', function () {
    var actualOne = fs.readFileSync('tests/actual-1.js').toString();
    var expectedOne = fs.readFileSync('tests/expected-1.js').toString();
    var actualTwo = fs.readFileSync('tests/actual-2.js').toString();
    var expectedTwo = fs.readFileSync('tests/expected-2.js').toString();
    assert.deepEqual(main(actualOne, 2), expectedOne, 'Actual should be equal to expected');
  });
});
