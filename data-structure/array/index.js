const strings = ["a", "b", "c", "d"];

// accessing index number 2 = c
strings[2];

// push
strings.push["e"]; // O(1)

// pop to remove index
strings.pop(); //O(1)

// unshift to add in the begining
strings.unshift("x"); // O(n)

// splice to update data on index 2
strings.splice(2, 0, "items"); //O(n/2)

console.log(strings);
