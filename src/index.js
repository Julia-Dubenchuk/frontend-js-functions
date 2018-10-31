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

	}

	return sumValue;

}

// export { min, max, sum };

console.log(min([7, 8, 9, 5, 1]));
console.log(min());
console.log(min(['j', 'k', 's', 'd']));
console.log(min([-5, 3, 's', 'd']));
console.log(min([5.5, 0.3, null, true]));
console.log(max([7, 8, 9, 5, 1]));
console.log(max());
console.log(max([2, 2, 2, 2, 2]));
console.log(sum(7, 8, 9, 5, 1));
console.log(sum());
console.log(min([7, 8, 9, 0, 1]));