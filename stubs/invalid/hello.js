const utils = require('./utils.js');

function sayHello() {

	utils.log('test');

	// return hello
	return 'goodbye';
}

exports.sayHello = sayHello;
