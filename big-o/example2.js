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
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("found nemo!");
		}
	}
}

// run the functions nemo, big, or character
findNemo(character);
