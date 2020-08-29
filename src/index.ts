export {};

declare global {
	interface Array<T> {
		/**
			* 
			* Finds the first item in the array
			* 
			* @returns the first item of the array
			* 
			* @returns undefined is there is no item in the array
		*/
		first(): T;

		/**
			* 
			* Finds the last item in the array
			*
			* @returns the last item of the array
			* 
			* @returns undefined is there is no item in the array
		*/
		last(): T;

		/**
			* 
			* Finds the highest value in the array
			* 
			* @returns the highest value in the array
			* 
			* @throws TypeError is not every item in the array is of type number
		*/
		max(): number | undefined;

		/**
			* 
			* Finds the lowest value in the array
			* 
			* @returns the lowest value in the array
			* 
			* @throws TypeError is not every item in the array is of type number
		*/
		min(): number | undefined;

		/**
			* 
			* Counts the item in the array
			* 
			* @param item The item that has to be counted
			* 
			* @returns the amount of times an item occurs in the array
			*
		*/
		count(item: T): number;

		/**
			* 
			* Checks to see if the item occurs a specified amount of times in the array
			* 
			* @param item The item that has to be checked
			*
			* @param amount The amount of times the item has to occur
			* 
			* @returns a boolean if the item indeed occurs n times in the array
			*
			* @Throws TypeError if the amount is not of type number
		*/
		includesN(item: T, amount: number): boolean | undefined;

		/**
			* 
			* Finds every duplicate in the array
			*
			* @param unique is a boolean to see if every item in the array should be unique. default -> true
			* 
			* @returns a list of the duplicate items
			*
		*/
		duplicates(unique?: boolean): Array<T>;

		/**
			* Removes all the duplicates in the array
			* 
			* @returns an array of unique items
		*/
		removeDuplicates(): Array<T>;

		/**
			*
			* Does the operation on every value in the list 
			*
			* @param operator +, -, * or /
			*
			* @param value A number that you want to do the operation with
			*
			* @return an array where every item has been operated on based on the value
			*
			* @throws TypeError if the operator is not +, -, * or /
			* @throws TypeError if the value is not of type number
			* @throws TypeError if the every item in the list is not of type number
			*
		*/
		math(operator: string, value: number): Array<T> | undefined;

		/**
			* 
			* This function finds the even numbers in a given array
			*
			* @returns an array with only the even numbers
			* 
			* @throws TypeError if the array is not of type number[]
		*/
		even(): Array<T>;

		/**
			* 
			* This function finds the odd numbers in a given array
			*
			* @returns an array with only the odd numbers
			* 
			* @throws TypeError if the array is not of type number[]
		*/
		odd(): Array<T>;

		/**
			* 
			* Inserts an item on the index position and shifts everything after
			* 
			* @param index 
			* @param item
			* 
			* @returns an array with the item inserted on the index position (shifts all the items after index + 1)
			*
			* @throws RangeError if the index is out of range
			* @throws TypeError if index is not of type number
			*

		*/
		insert(index: number, item: any): Array<T>;

		/**
			* 
			* Replaces an item in the given array at the index
			* 
			* @param index 
			* @param item 
			* 
			* @returns an array where the item at index is replaced by the new item
			*
			* @throws RangeError if the index is out of range
			* @throws TypeError if index is not of type number
			*
		*/
		replace(index: number, item: any): Array<T>;

		/**
			* 
			* Finds the item by index and repeats it a given amount of times
			* 
			* @param index is the index of the item that you want to repeat
			* @param amount is the amount of times you want to repeat is
			* 
			* @returns the original array with a repeated value
			* 
			* @throws RangeError if the index is out of range
			* @throws TypeError if index is not of type number
			* @throws TypeError if amount is not of type number
			*
		*/
		repeat(index: number, amount: number): Array<T>;
		/**
			* 
			* Rotates an array right or left based on the parameter.
			* 
			* @param reverse true -> rotate left. false -> rotate right. default -> false
			* 
			* @throws TypeError if reverse is not of type boolean
			* @throws Error if array is empty
			* 
		*/
		rotate(reverse?: boolean): Array<T>;

	}
}

Array.prototype.first = function () {
	return this.length ? this[0] : undefined;
}

Array.prototype.last = function () {
	return this.length ? this[this.length - 1]: undefined;
}

Array.prototype.min = function () {
	if(!this.every(item => typeof item === 'number')) {
		throw new TypeError(`Type error: ${this} is not of type number[].`);
	}
	return this.length ? Math.min.apply(null, this) : undefined;
}

Array.prototype.max = function () {
	if(!this.every(item => typeof item === 'number')) {
		throw new TypeError(`Type error: ${this} is not of type number[].`);
	}
	return this.length ? Math.max.apply(null, this) : undefined;
}

Array.prototype.count = function (item) {
	return this.length ? this.filter(i => i === item).length : 0;
}

Array.prototype.includesN = function(item, amount) {
	if(typeof amount !== 'number') {
		throw new TypeError(`Type error: ${amount} is not a number.`);
	}
	return this.length ? this.filter(i => i === item).length === amount ? true : false : undefined;
}

Array.prototype.duplicates = function(unique = true) {
	const arr = this.filter((item, index) => this.indexOf(item) != index);
	const uniques = arr.removeDuplicates();
	return unique ? uniques : arr.concat(uniques);
}

Array.prototype.removeDuplicates = function() {
	return this.filter((item, index, self) => self.indexOf(item) === index);
}

Array.prototype.math = function(operator, value) {
	const operators = ["+","-","*","/"];
	if(!this.every(item => typeof item === 'number')) {
		throw new TypeError(`Type error: ${this} is not of type number[].`);
	}
	if(typeof value !== 'number') {
		throw new TypeError(`Type error: ${value} is not of type number.`);
	}
	if(!operators.includes(operator)) {
		throw new TypeError(`Type error: ${operator} is not of type string.`);
	}
	switch(operator) {
		case operators[0]:
			return this.map(item => item + value);
		case operators[1]:
			return this.map(item => item - value);
		case operators[2]:
			return this.map(item => item * value);
		case operators[3]:
			return this.map(item => item / value);
		default: 
			return undefined;
	}
}

Array.prototype.even = function () {
	if(!this.every(item => typeof item === 'number')) {
		throw new TypeError(`Type error: ${this} is not of type number[].`);
	}
	return this.filter(item => item % 2 === 0);
}

Array.prototype.odd = function () {
	if(!this.every(item => typeof item === 'number')) {
		throw new TypeError(`Type error: ${this} is not of type number[].`);
	}
	return this.filter(item => item % 2 !== 0);
}

Array.prototype.insert = function(index, item) {
	if(typeof index !== 'number') {
		throw new TypeError(`Type error: index ${index} is not of type number.`);
	}
	if(index >= this.length) {
		throw new RangeError(`Range error: ${index} is out of range`);
	}
	this.splice(index, 0, item);
	return this;
}

Array.prototype.replace = function(index, item) {
	if(typeof index !== 'number') {
		throw new TypeError(`Type error: index ${index} is not of type number.`);
	}
	if(index >= this.length) {
		throw new RangeError(`Range error: ${index} is out of range`);
	}
	this.splice(index, 1, item);
	return this;
}

Array.prototype.repeat = function(index, amount) {
	if(typeof index !== 'number') {
		throw new TypeError(`Type error: index ${index} is not of type number.`);
	}
	if(typeof amount !== 'number') {
		throw new TypeError(`Type error: amount ${amount} is not of type number.`);
	}
	const item = this[index];
	for(let i = 0; i < amount; i++) {
		this.insert(index, item);
	}
	return this;
}

Array.prototype.rotate = function(reverse = false) {
	if(typeof reverse !== 'boolean') {
		throw new TypeError(`Type error: reverse ${Boolean} is not of type boolean.`);
	}
	if(this.length === 0) {
		throw new Error('The given array is empty.');
	}
	if(reverse) {
		this.push(this.shift());
	} else {
		this.unshift(this.pop());
	}
	return this;
}
