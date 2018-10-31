function numberArr (arg) {
	let arrayArg = [];

	for (let i = 0; i < arg.length; i++) {
		arrayArg[i] = arg[i];
	}

	let arr = arrayArg.filter(item => typeof item === 'number');

	return arr;
}

function min () {
	let minValue;

	if (arguments.length && arguments[0].length) {
		let array = numberArr(arguments[0]);

		if (array.length) {
			minValue = array.reduce((minItem, current) => (minItem < current ? minItem : current));
		}

	}

	return minValue;
}

function max () {
	let maxValue;

	if (arguments.length && arguments[0].length) {
		let arr = numberArr(arguments[0]);

		if (arr.length) {
			maxValue = arr.reduce((maxItem, current) => (maxItem > current ? maxItem : current));
		}

	}

	return maxValue;
}

function sum () {
	let sumValue;

	if (arguments.length) {
		let arr = numberArr(arguments);

		if (arr.length) {
			sumValue = arr.reduce((sumItem, current) => sumItem + current);
		}

	} else {
		sumValue = 0;
	}

	return sumValue;

}
export { min, max, sum };