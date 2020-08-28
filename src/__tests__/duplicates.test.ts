import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123","a","a","a"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('Find unique duplicates in numberArray', () => {
	expect(numberArray.duplicates()).toStrictEqual([10]);
});

test('Find unique duplicates in stringArray', () => {
	expect(stringArray.duplicates()).toStrictEqual(["d","e"]);
});

test('Find all duplicates in stringArray ', () => {
	expect(stringArray.duplicates(false)).toStrictEqual(["d","e","d","e","e","e","d","e"]);
});

test('Find all duplicates in mixedArray', () => {
	expect(mixedArray.duplicates(false)).toStrictEqual(["a","a","a","a"]);
});

test('Find duplicates in emptyArray', () => {
	expect(emptyArray.duplicates()).toStrictEqual([]);
});
