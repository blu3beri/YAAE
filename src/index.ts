export {};

declare global {
	interface Array<T> {
		/**
			* returns the first element of the array
			* 
			* returns undefined is there is no element in the array
		*/
		first(): T;
		/**
			* returns the last element of the array
			* 
			* returns undefined is there is no element in the array
		*/
		last(): T;
		/**
			* returns the highest value in the array
			* 
			* returns NaN if the array is not of type number[]
		*/
		max(): number | undefined;
		/**
			* returns the lowest value in the array
			* 
			* returns NaN if the array is not of type number[]
		*/
		min(): number | undefined;
		/**
			* returns the amount of times an element occurs in the array
			* 
			* returns 0 if the element does not occur in the array
			* @param i the element that has to be counted
		*/
		count(i: T): number;
		/**
			* returns a boolean if the item indeed occurs n times in the array
			*
			* @param i the element that has to be checked
			*
			* @param n the amount of times the element has to occur
		*/
		includesN(i: T, n: number): boolean | undefined;
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

Array.prototype.count = function (i: any) {
	return this.length ? this.filter(item => item === i).length : 0;
}

Array.prototype.includesN = function(i: any, n: number) {
	this.filter(item => item === i)
	return this.length ? this.filter(item => item === i).length === n ? true : false : undefined;
}
