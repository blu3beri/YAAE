import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('addition operation for numberArray', () => {
	expect(numberArray.math("+", 1)).toStrictEqual([2,3,4,5,6,7,8,9,10,11]);
});

test('subtraction operation for numberArray', () => {
	expect(numberArray.math("-", 1)).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
});

test('Multiplication operation for numberArray', () => {
	expect(numberArray.math("*", 2)).toStrictEqual([2,4,6,8,10,12,14,16,18,20]);
});

test('division operation on numberArray', () => {
	expect(numberArray.math("/", 2)).toStrictEqual([0.5, 1, 1.5, 2, 2.5,3, 3.5, 4, 4.5, 5]);
});

test('division multiplier on emptyArray', () => {
	expect(emptyArray.math("/", 2)).toStrictEqual([]);
});

test("Wrong multiplier on numberArray", () => {
	expect(() => {numberArray.math("test", 2)}).toThrow(TypeError);
});

test("Addition multiplier on stringArray", () => {
	expect(() => {stringArray.math("+", 2)}).toThrow(TypeError);
});
