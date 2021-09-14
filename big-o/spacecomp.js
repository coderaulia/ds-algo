// Space Complexity

function boooo(n) {
	for (let i = 0; i < n.length; i++) {
		console.log("boooo!");
	}
}

// O(1)
boooo([1, 2, 3, 4, 5, 6, 6]);

function arrayOfHiNTimes(n) {
	// Data Structure
	var hiArray = [];
	for (let i = 0; i < n; i++) {
		hiArray[i] = "hi";
	}
	return hiArray;
}

// O(n)
arrayOfHiNTimes(6);
