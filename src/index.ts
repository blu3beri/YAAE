export {};

declare global {
    interface Array<T> {
        first(): T;
        last(): T;
        max(): number;
        min(): number;
        count(i: T): number;
    }
}

Array.prototype.first = function () {
    return this[0];
}

Array.prototype.last = function () {
    return this[this.length - 1];
}

Array.prototype.last = function () {
    return this[this.length - 1];
}

Array.prototype.max = function () {
    return Math.max(...this);
}

Array.prototype.min = function () {
    return Math.min(...this);
}

Array.prototype.count = function (i: any) {
    return this.filter(item => item === i).length;
}