const hello = require('../hello.js');
var assert = require('assert');

describe('main', function() {
	it('should return hello', function() {
		assert.equal('hello', hello.sayHello());
	});
});

