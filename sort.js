function mergeSort(n, arr) {

	// find the middle point
	var middle = Math.ceil(n / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);
	console.log(left, right)

	// call mergeSort on left side


	// call mergeSort on right side

	// merge two arrays


}

var n = 10
var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(mergeSort(n, arr))
