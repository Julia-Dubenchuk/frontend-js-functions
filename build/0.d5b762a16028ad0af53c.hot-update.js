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
console.log(add);
average();
console.log(global);
console.log('finish');
setInterval(function () {}, 10);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6L1Byb2plY3RzLVNpZ21hVW5pdmVyc2l0eS9mcm9udGVuZC1qcy1mdW5jdGlvbnMvc3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ2xvYmFsIiwiYWRkIiwibnVtYmVyQSIsIm51bWJlckIiLCJhdmVyYWdlIiwibG9jYWwiLCJzdW0iLCJyZXN1bHQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLElBQUlDLFNBQVMsQ0FBYjs7QUFFQSxTQUFTQyxHQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQy9CLFFBQU9ELFVBQVVDLE9BQWpCO0FBQ0E7O0FBRUQsU0FBU0MsT0FBVCxHQUFvQjtBQUNuQixLQUFJQyxRQUFRLENBQVo7O0FBRUEsVUFBU0MsR0FBVCxHQUFnQjtBQUNmLE1BQUlDLFNBQVMsQ0FBYjtBQUNBO0FBQ0RULFNBQVFDLEdBQVIsQ0FBWUMsTUFBWixFQUFvQkssS0FBcEI7QUFDQTtBQUNEUCxRQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQUc7QUFDQU4sUUFBUUMsR0FBUixDQUFZQyxNQUFaO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FTLFlBQVksWUFBWSxDQUFFLENBQTFCLEVBQTRCLEVBQTVCLEUiLCJmaWxlIjoiMC5kNWI3NjJhMTYwMjhhZDBhZjUzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cbmxldCBnbG9iYWwgPSAxO1xuXG5mdW5jdGlvbiBhZGQgKG51bWJlckEsIG51bWJlckIpIHtcblx0cmV0dXJuIG51bWJlckEgKyBudW1iZXJCO1xufVxuXG5mdW5jdGlvbiBhdmVyYWdlICgpIHtcblx0bGV0IGxvY2FsID0gMjtcblxuXHRmdW5jdGlvbiBzdW0gKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHR9XG5cdGNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xufVxuY29uc29sZS5sb2coYWRkKVxuYXZlcmFnZSgpO1xuY29uc29sZS5sb2coZ2xvYmFsKTtcbmNvbnNvbGUubG9nKCdmaW5pc2gnKTtcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHt9LCAxMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==