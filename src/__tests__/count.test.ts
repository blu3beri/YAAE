import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('count 10 on numberArray', () => {
	expect(numberArray.count(10)).toBe(4);
});

test('count test on stringArray', () => {
	expect(stringArray.count('test')).toBe(0);
});

test('count true on mixedArray', () => {
	expect(mixedArray.count(true)).toBe(1);
});

test('count empty string on emptyArray', () => {
	expect(emptyArray.count('')).toBe(0);
});
