export {};

declare global {
    interface Array<T> {
        first(): T;
        last(): T;
        max(): number | undefined;
        min(): number | undefined;
        count(i: T): number | undefined;
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
    return this.length ? this.filter(item => item === i).length : undefined;
}

Array.prototype.includesN = function(i: any, n: number) {
    this.filter(item => item === i)
    return this.length ? this.filter(item => item === i).length === n ? true : false : undefined;
}