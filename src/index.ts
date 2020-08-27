export {};

declare global {
    interface Array<T> {
        first(): T;
        last(): T;
        max(): number | undefined;
        min(): number | undefined;
        count(i: T): number | undefined;
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
    return this.length ? this.filter(item => item === i).length : undefined;
}