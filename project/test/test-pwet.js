const assert = require('assert');
const pwet = require('../pwet.js');

describe('main', function() {

  it('should return pwet', function() {
    assert.equal('pwet', pwet.sayPwet());
  });

});
