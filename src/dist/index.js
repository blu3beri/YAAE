"use strict";
exports.__esModule = true;
Array.prototype.first = function () {
    return this.length ? this[0] : undefined;
};
Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : undefined;
};
Array.prototype.min = function () {
    if (!this.every(function (item) { return typeof item === 'number'; })) {
        throw new TypeError("Type error: " + this + " is not of type number[].");
    }
    return this.length ? Math.min.apply(null, this) : undefined;
};
Array.prototype.max = function () {
    if (!this.every(function (item) { return typeof item === 'number'; })) {
        throw new TypeError("Type error: " + this + " is not of type number[].");
    }
    return this.length ? Math.max.apply(null, this) : undefined;
};
Array.prototype.count = function (item) {
    return this.length ? this.filter(function (i) { return i === item; }).length : 0;
};
Array.prototype.includesN = function (item, amount) {
    if (typeof amount !== 'number') {
        throw new TypeError("Type error: " + amount + " is not a number.");
    }
    return this.length ? this.filter(function (i) { return i === item; }).length === amount ? true : false : undefined;
};
Array.prototype.duplicates = function (unique) {
    var _this = this;
    if (unique === void 0) { unique = true; }
    var arr = this.filter(function (item, index) { return _this.indexOf(item) != index; });
    var uniques = arr.removeDuplicates();
    return unique ? uniques : arr.concat(uniques);
};
Array.prototype.removeDuplicates = function () {
    return this.filter(function (item, index, self) { return self.indexOf(item) === index; });
};
Array.prototype.math = function (operator, value) {
    var operators = ["+", "-", "*", "/"];
    if (!this.every(function (item) { return typeof item === 'number'; })) {
        throw new TypeError("Type error: " + this + " is not of type number[].");
    }
    if (typeof value !== 'number') {
        throw new TypeError("Type error: " + value + " is not of type number.");
    }
    if (!operators.includes(operator)) {
        throw new TypeError("Type error: " + operator + " is not of type string.");
    }
    switch (operator) {
        case operators[0]:
            return this.map(function (item) { return item + value; });
        case operators[1]:
            return this.map(function (item) { return item - value; });
        case operators[2]:
            return this.map(function (item) { return item * value; });
        case operators[3]:
            return this.map(function (item) { return item / value; });
        default:
            return undefined;
    }
};
