class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop(item) {
		// accessing last item
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		// decrease
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("welcome back");
newArray.push("!");
// delete last item
newArray.pop();
console.log(newArray);
