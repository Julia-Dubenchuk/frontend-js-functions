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
console.log(add(3));
average();
console.log(global);
console.log('finish');
setInterval(function () {}, 10);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6L1Byb2plY3RzLVNpZ21hVW5pdmVyc2l0eS9mcm9udGVuZC1qcy1mdW5jdGlvbnMvc3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ2xvYmFsIiwiYWRkIiwibnVtYmVyQSIsIm51bWJlckIiLCJhdmVyYWdlIiwibG9jYWwiLCJzdW0iLCJyZXN1bHQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLElBQUlDLFNBQVMsQ0FBYjs7QUFFQSxTQUFTQyxHQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQy9CLFFBQU9ELFVBQVVDLE9BQWpCO0FBQ0E7O0FBRUQsU0FBU0MsT0FBVCxHQUFvQjtBQUNuQixLQUFJQyxRQUFRLENBQVo7O0FBRUEsVUFBU0MsR0FBVCxHQUFnQjtBQUNmLE1BQUlDLFNBQVMsQ0FBYjtBQUNBO0FBQ0RULFNBQVFDLEdBQVIsQ0FBWUMsTUFBWixFQUFvQkssS0FBcEI7QUFDQTtBQUNEUCxRQUFRQyxHQUFSLENBQVlFLElBQUksQ0FBSixDQUFaO0FBQ0FHO0FBQ0FOLFFBQVFDLEdBQVIsQ0FBWUMsTUFBWjtBQUNBRixRQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBUyxZQUFZLFlBQVksQ0FBRSxDQUExQixFQUE0QixFQUE1QixFIiwiZmlsZSI6IjAuYTY0MDkwMjRhYjNiN2Y3NDg4Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdzdGFydCcpO1xuXG5sZXQgZ2xvYmFsID0gMTtcblxuZnVuY3Rpb24gYWRkIChudW1iZXJBLCBudW1iZXJCKSB7XG5cdHJldHVybiBudW1iZXJBICsgbnVtYmVyQjtcbn1cblxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7XG5cdGxldCBsb2NhbCA9IDI7XG5cblx0ZnVuY3Rpb24gc3VtICgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0fVxuXHRjb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcbn1cbmNvbnNvbGUubG9nKGFkZCgzKSlcbmF2ZXJhZ2UoKTtcbmNvbnNvbGUubG9nKGdsb2JhbCk7XG5jb25zb2xlLmxvZygnZmluaXNoJyk7XG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7fSwgMTApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=