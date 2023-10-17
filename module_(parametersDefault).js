// ES5
function sumNumbers(a, b) {
	b = b === undefined ? 0 : b;
	return a + b;
}

// ES6
function resNumbers(a,b = 0){
	return a - b;
}

// REACT
function Password({password = 'untitled'}) {
	return <h1>{password}</h1>
}
