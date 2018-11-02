function isNumber (item) {
	return typeof item === 'number';
}

function getLess (minNumber, currentNumber) {
	return minNumber < currentNumber ? minNumber : currentNumber;
}

function getGreater (maxNumber, currentNumber) {
	return maxNumber > currentNumber ? maxNumber : currentNumber;
}

function getSum (number, currentNumber) {
	return number + currentNumber;
}

function min (numbersArray = []) {
	return numbersArray.filter(isNumber)
		.reduce(getLess, undefined);

}

function max (numbersArray = []) {
	return numbersArray.filter(isNumber)
		.reduce(getGreater, undefined);
}

function sum (...numbersArray) {
	return numbersArray.filter(isNumber)
		.reduce(getSum, 0);

}

export { min, max, sum };