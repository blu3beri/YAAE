import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('repeat on numberArray', () => {
	expect(numberArray.repeat(2, 4)).toStrictEqual([1,2,3,3,3,3,3,4,5,6,7,8,9,10]);
});

test("repeat on numberArray with index out of range", () => {
	expect(() => {numberArray.repeat(9001, 10)}).toThrow(RangeError);
});

test('repeat on string array', () => {
	expect(stringArray.repeat(2, 2)).toStrictEqual(["a","b","c","c","c","d","e","d","e","d","e","e","e"]);
});

test("repeat on empty arrray", () => {
	expect(() => {emptyArray.repeat(0, 1)}).toThrow(RangeError);
});

