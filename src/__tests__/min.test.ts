import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('min on numberArray', () => {
    expect(numberArray.min()).toBe(1);
});

test("min on stringArray", () => {
	expect(() => {stringArray.min()}).toThrow(TypeError);
});

test("min on mixedArray", () => {
	expect(() => {mixedArray.min()}).toThrow(TypeError);
});

test('min on emptyArray', () => {
    expect(emptyArray.min()).toEqual(undefined);
});