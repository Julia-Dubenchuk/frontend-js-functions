exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log('start');

let global = 1;

function add(numberA, numberB) {
	return numberA + numberB;
}

function average() {
	let local = 2;

	function sum() {
		let result = 0;
	}
	console.log(global, local);
}
console.log(add(3445, 6767));
average();
console.log(global);
console.log('finish');
setInterval(function () {}, 10);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6L1Byb2plY3RzLVNpZ21hVW5pdmVyc2l0eS9mcm9udGVuZC1qcy1mdW5jdGlvbnMvc3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ2xvYmFsIiwiYWRkIiwibnVtYmVyQSIsIm51bWJlckIiLCJhdmVyYWdlIiwibG9jYWwiLCJzdW0iLCJyZXN1bHQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLElBQUlDLFNBQVMsQ0FBYjs7QUFFQSxTQUFTQyxHQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQy9CLFFBQU9ELFVBQVVDLE9BQWpCO0FBQ0E7O0FBRUQsU0FBU0MsT0FBVCxHQUFvQjtBQUNuQixLQUFJQyxRQUFRLENBQVo7O0FBRUEsVUFBU0MsR0FBVCxHQUFnQjtBQUNmLE1BQUlDLFNBQVMsQ0FBYjtBQUNBO0FBQ0RULFNBQVFDLEdBQVIsQ0FBWUMsTUFBWixFQUFvQkssS0FBcEI7QUFDQTtBQUNEUCxRQUFRQyxHQUFSLENBQVlFLElBQUksSUFBSixFQUFVLElBQVYsQ0FBWjtBQUNBRztBQUNBTixRQUFRQyxHQUFSLENBQVlDLE1BQVo7QUFDQUYsUUFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQVMsWUFBWSxZQUFZLENBQUUsQ0FBMUIsRUFBNEIsRUFBNUIsRSIsImZpbGUiOiIwLmJhNThjMDhjMGZkODc4ZmUzYTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnc3RhcnQnKTtcblxubGV0IGdsb2JhbCA9IDE7XG5cbmZ1bmN0aW9uIGFkZCAobnVtYmVyQSwgbnVtYmVyQikge1xuXHRyZXR1cm4gbnVtYmVyQSArIG51bWJlckI7XG59XG5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkge1xuXHRsZXQgbG9jYWwgPSAyO1xuXG5cdGZ1bmN0aW9uIHN1bSAoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdH1cblx0Y29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG59XG5jb25zb2xlLmxvZyhhZGQoMzQ0NSwgNjc2NykpXG5hdmVyYWdlKCk7XG5jb25zb2xlLmxvZyhnbG9iYWwpO1xuY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge30sIDEwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9