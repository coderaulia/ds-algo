function funChallenge(input) {
	let a = 10; //O(1)
	a = 50 + 3; // O(1)

	// O(n) loops are linear time
	for (let i = 0; i < input.length; i++) {
		// O(n) depends on how many input
		anotherFunction();
		// O(n)
		let stranger = true;
		// O(n)
		a++;
	}
	// O(1) just run once
	return a;
}

funChallenge();

// Total = O(3 + 4n)
