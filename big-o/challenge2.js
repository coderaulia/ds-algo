function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)

	// O(n) based on input
	for (let i = 0; i < input; i++) {
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}
	// O(n)
	for (let j = 0; j < input; j++) {
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	// O(1)
	let whoAmI = "I don't know";
}

// Total = Big O(4 + 5n)
