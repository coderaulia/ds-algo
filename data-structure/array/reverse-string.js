// Reverse a string function

function reverseString(str) {
	//check input
	if (!str || str.length < 2 || typeof str !== "string") {
		return "Can't do that!";
	}

	const finalWord = [];
	const totalItems = str.length - 1;

	for (let i = totalItems; i >= 0; i--) {
		finalWord.push(str[i]);
	}

	// console.log(finalWord);

	// return the backward string
	return finalWord.join("");
}

// much simpler function
function simpleReverse(str) {
	return str.split("").reverse().join("");
}

// es6 function
const reverse6 = (str) => [...str].reverse("").join("");

// calling function
console.log(reverseString("Halo semuanya! Selamat datang di Indonesia!"));
console.log(reverse6("Halo semuanya! Selamat datang!"));
console.log(simpleReverse("Halo! Selamat datang di Indonesia!"));
