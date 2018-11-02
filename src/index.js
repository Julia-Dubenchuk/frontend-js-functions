function numberArr (arg) {
	let arrayArg = [];

	for (let i = 0; i < arg.length; i++) {
		arrayArg[i] = arg[i];
	}

	let arr = arrayArg.filter(item => typeof item === 'number');

	return arr;
}

function isNumber (item) {
	return typeof item === 'number';
}

function getGreater (minNumber, currentNumber) {
	return minNumber < currentNumber ? minNumber : currentNumber;
}

function isEmpty (numbers) {
	return numbers.length > 0;
}

function min (...numbersArray) {
	// export function max (numbers = []) {
	// 	return numbers
	// 	   .filter(isNumber)
	// 	   .reduce(getGreater, undefined);
	//  }
	// return isEmpty(numbersArray) ?
	// 	numbersArray.filter(item => isNumber(item))
	// 	.reduce((minNum, currentNum) => getGreater(minNum, currentNum)) :
	// 	undefined;

	// return isEmpty(numbersArray) ?
	// 	numbersArray.filter(isNumber)
	// 	.reduce(getGreater) :
	// 	undefined;

	return numbersArray.filter(isNumber)
		.reduce(getGreater, undefined);

	// .reduce((minNumber, currentNumber) => getGreater(minNumber, currentNumber));

	// .reduce((result, item) => item < result);
}

console.log(min(0, 8, -5, 1, 2, 'kjh', 'klk'));
console.log(min([]));

function max (...abcouhk) {
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

function average (numbers) {
	let result = numbers[0];
	let index;

	for (index = 1; index < numbers.length; index += 1) {
		console.log(numbers[index]);
		result += numbers[index];
	}
	result /= numbers.length;
	return result;
}

let human = {
	name: 'Ivan',
	age: 23
};

let property;

for (property in human) {
	console.log(property, human[property]);
}

let averageValue = average([22, 55, 3, 5, 1, 4]);

let arrayA = [1, 2, 3];
let arrayB = [1, 2, 3];
let arrayC = arrayA;

if (arrayA === arrayC) {
	console.log(true);
}

console.log(`average: ${averageValue}`);

console.log(min(['max', 8, 10, 7, -6]));
console.log(min());

// export { min, max, sum };