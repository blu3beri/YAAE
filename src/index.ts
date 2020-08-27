export {};

declare global {
	interface Array<T> {
		/**
			* Returns the first element of the array
			* 
			* Returns undefined is there is no element in the array
		*/
		first(): T;
		/**
			* Returns the last element of the array
			* 
			* Returns undefined is there is no element in the array
		*/
		last(): T;
		/**
			* Returns the highest value in the array
			* 
			* Returns NaN if the array is not of type number[]
		*/
		max(): number | undefined;
		/**
			* Returns the lowest value in the array
			* 
			* Returns NaN if the array is not of type number[]
		*/
		min(): number | undefined;
		/**
			* Returns the amount of times an element occurs in the array
			* 
			* Returns 0 if the element does not occur in the array
			*
			* @param item The element that has to be counted
		*/
		count(item: T): number;
		/**
			* Returns a boolean if the item indeed occurs n times in the array
			*
			* @param item The element that has to be checked
			*
			* @param amount The amount of times the element has to occur
		*/
		includesN(item: T, amount: number): boolean | undefined;
		/**
			* Returns a list of the duplicate items
			*/
		duplicates(): Array<T>;
		/**
			* Returns a list of unique items
		*/
		removeDuplicates(): Array<T>;
		/**
			*
			* Does the operation on every value in the list 
			*
			* Returns undefined if list is not of type number[]
			*
			* @param operator +, -, * or /
			*
			* @param value A number that you want to do the operation with
		*/
		math(operator: string, value: number): Array<T> | undefined;
	}
}

Array.prototype.first = function () {
	return this.length ? this[0] : undefined;
}

Array.prototype.last = function () {
	return this.length ? this[this.length - 1]: undefined;
}

Array.prototype.min = function () {
	return this.length ? Math.min.apply(null, this) : undefined;
}

Array.prototype.max = function () {
	return this.length ? Math.max.apply(null, this) : undefined;
}

Array.prototype.count = function (item) {
	return this.length ? this.filter(i => i === item).length : 0;
}

Array.prototype.includesN = function(item, amount) {
	return this.length ? this.filter(i => i === item).length === amount ? true : false : undefined;
}

Array.prototype.duplicates = function() {
	return this
		.filter((item, index) => this.indexOf(item) != index)
		.removeDuplicates();
}

Array.prototype.removeDuplicates = function() {
	return this.filter((item, index, self) => self.indexOf(item) === index);
}

Array.prototype.math = function(operator, value) {
	if(!this.every(item => typeof item === 'number')) {
		return undefined;
	}
	if(typeof value !== 'number') {
		return undefined;
	}
	switch(operator) {
		case "+":
			return this.map(item => item + value);
		case "-":
			return this.map(item => item - value);
		case "*":
			return this.map(item => item * value);
		case "/":
			return this.map(item => item / value);
		default: 
			return undefined;
	}
}
