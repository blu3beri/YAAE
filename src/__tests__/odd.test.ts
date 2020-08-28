import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('odd on numberArray', () => {
	expect(numberArray.odd()).toStrictEqual([1,3,5,7,9]);
});

test("odd on stringArray", () => {
	expect(() => {stringArray.odd()}).toThrow(TypeError);
});

test("odd on mixedArray", () => {
	expect(() => {mixedArray.odd()}).toThrow(TypeError);
});

test('odd on emptyArray', () => {
	expect(emptyArray.odd()).toStrictEqual([]);
});
