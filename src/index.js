function numberArr (arg) {
	let arrayArg = [];

	for (let i = 0; i < arg.length; i++) {
		arrayArg[i] = arg[i];
	}

	let arr = arrayArg.filter(item => typeof item === 'number');

	return arr;
}

function min (numbersArray = []) {
	// let minValue;

	// if (arguments.length && arguments[0].length) {
	// 	let array = numberArr(arguments[0]);

	// 	if (array.length) {
	// 		minValue = array.reduce((minItem, current) => (minItem < current ? minItem : current));
	// 	}

	// }

	// return minValue;
	return numbersArray.filter(number => typeof number === 'number').reduce((result, item) => item < result);   
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

	}
	else {
		sumValue = 0;
	}

	return sumValue;

}

console.log(min([5, 8, 10, 7, -6]));

// export { min, max, sum };