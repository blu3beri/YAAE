import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('even on numberArray', () => {
	expect(numberArray.even()).toStrictEqual([2,4,6,8,10]);
});

test("even on stringArray", () => {
	expect(() => {stringArray.even()}).toThrow(TypeError);
});

test("even on mixedArray", () => {
	expect(() => {mixedArray.even()}).toThrow(TypeError);
});

test('even on emptyArray', () => {
	expect(emptyArray.even()).toStrictEqual([]);
});
