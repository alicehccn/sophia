function mergeSort(arr) {
	if (arr.length < 2)
		return;

	var middle = Math.ceil(arr.length/2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length)
	console.log('array:' +arr)
	console.log('left: ', left, 'right: ', right)
	mergeSort(left);
	mergeSort(right);

	merge(left, right);
}

function merge(left, right) {
	var maxLen = Math.max(left.length, right.length);
	

	
	var result = left.concat(right);
	console.log('rrrrr',result)
	return result;
}

var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(mergeSort(arr))