import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('Find duplicates in number array', () => {
	expect(numberArray.dupilicates()).toStrictEqual([10]);
});

test('Find duplicates in string array', () => {
	expect(stringArray.dupilicates()).toStrictEqual(['d','e']);
});

test('Find duplicates in mixed array', () => {
	expect(mixedArray.dupilicates()).toStrictEqual([]);
});

test('Find duplicates in empty array', () => {
	expect(emptyArray.dupilicates()).toStrictEqual([]);
});
