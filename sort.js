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


function quickSort(arr, low, high) {
	if (low < high) {
		var pt = partision(arr, low, high);

		quickSort(arr, low, pt - 1);
		quickSort(arr, pt + 1, high);
	}
	return arr;
}

function partision(arr, low, high) {
	var pivot = arr[high];
	var i = low - 1;
	var temp;

	for (var j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	temp = arr[i+1];
	arr[i+1] = pivot;
	arr[high] = temp;
	return (i+1);
}


function main() {
	var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	var result = quickSort(arr, 0, arr.length-1)
	console.log(result);
}

main();
