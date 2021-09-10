// Measuring using times

const nemo = ["nemo"];
const character = [
	"dory",
	"bruce",
	"blue",
	"marlin",
	"gills",
	"nigel",
	"bloat",
	"squirt",
	"nemo",
	"darla",
	"hank",
	"jason",
	"mark",
];
// large array to look some differences between 10 array with 1000, 100000, or even 1 mil lines of array
const big = new Array(100000).fill("nemo");

function findNemo(array) {
	// measure how long it takes to run before looping
	let t0 = performance.now();
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("found nemo!");
		}
	}
	// measure how long it takes after looping
	let t1 = performance.now();
	// print how long t1-t0
	console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

// run the functions nemo, big, or character
findNemo(character); // O(n) -> Linear time
