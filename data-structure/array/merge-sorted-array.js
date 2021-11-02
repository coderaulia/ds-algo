// Reverse 2 joined array.

function mergeSortedArrays(array1, array2) {
	const mergedArray = [];
	// array 1 first item
	let array1Item = array1[0];
	// array 2 first item
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	//We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 6 and 8!
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		if (array2Item === undefined || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}

console.log(mergeSortedArrays([1, 4, 30, 45], [2, 5, 22, 50]));
console.log(mergeSortedArrays([1, 4, 30, 22], [2, 5, 23, 14]));
