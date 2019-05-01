function mergeSort(arr) {
	if (arr.length < 2) return;

	var m = arr.length/2;
	var left = arr.slice(0, m);
	var right = arr.slice(m, arr.length)

	mergeSort(left);
	mergeSort(right);

	return merge(arr, left, right);
	
}

function merge(arr, left, right) {
	var i = 0;
	var j = 0;
	var k = 0;

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			arr[k] = left[i];
			i++;
		} else {
			arr[k] = right[j];
			j++;
		}
		k++;
	}
	while (i < left.length) {
		arr[k] = left[i];
		i++;
		k++;
	}

	while (j < right.length) {
		arr[k] = right[j];
		j++;
		k++;
	}

	return arr;
}


function main() {
	var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	var result = mergeSort(arr)
	console.log(result);
}

main();
