import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('numberArray includes 10 four times', () => {
	expect(numberArray.includesN(10, 4)).toBe(true);
});

test('stringArray includes b eight times', () => {
	expect(stringArray.includesN('b', 8)).toBe(false);
});

test('mixedArray includes true one time', () => {
	expect(mixedArray.includesN(true, 1)).toBe(true);
});

test('emptyArray includes foo 100 times', () => {
	expect(emptyArray.includesN('foo', 100)).toEqual(undefined);
});
