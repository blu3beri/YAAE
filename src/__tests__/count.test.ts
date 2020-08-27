import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('count 10 from number array', () => {
	expect(numberArray.count(10)).toBe(4);
});

test('count test from string array', () => {
	expect(stringArray.count('test')).toBe(0);
});

test('count true from mixed array', () => {
	expect(mixedArray.count(true)).toBe(1);
});

test('count empty string from empty array', () => {
	expect(emptyArray.count('')).toBe(0);
});
