const assert = require('assert');
const hello = require('../hello.1.js');

describe('main', function() {

  it('should return hello', function() {
    assert.equal('hello', hello.sayHello());
  });

});
