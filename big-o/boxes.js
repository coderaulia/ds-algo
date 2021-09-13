const boxes = ["a", "b", "c", "d", "e"];

function LogAllPairsOfArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
}

LogAllPairsOfArray(boxes);

// O(n^2) n squared - Quadratic time
