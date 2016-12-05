const utils = require('./utils.js');

function sayHello() {

	utils.log('test');

	// return hello
	return 'hello';
}

exports.sayHello = sayHello;
