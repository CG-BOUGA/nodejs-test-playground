
function error(err) {
	console.error(err);
}


function log(s) {
    if (typeof(s) === 'string' || s instanceof String) {
        console.log(s);
    } else {
        console.log(JSON.stringify(s));
    }
}

exports.error = error;
exports.log = log;
