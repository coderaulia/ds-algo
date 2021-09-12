function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]); // O(1)

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;

	// looping the first half items, if the items 10 so the index would be 5.
	while (index < middleIndex) {
		console.log(items[index]);
		index++;
	}

	// O(100)
	for (var i = 0; i < 100; i++) {
		console.log("hi");
	}
}

// O(1 + n/2 + 100) but we are ignoring variable and small calculations
// Imagine that the input would be 1 Million, so if we drop the 1 & 100, it doesn't matter.
