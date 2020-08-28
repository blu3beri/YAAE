import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('Remove duplicates in numberArray', () => {
	expect(numberArray.removeDuplicates()).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('Remove duplicates in stringArray', () => {
	expect(stringArray.removeDuplicates()).toStrictEqual(["a","b","c","d","e","234"]);
});

test('Remove duplicates in mixedArray', () => {
	expect(mixedArray.removeDuplicates()).toStrictEqual([true,2,3,4,"a","b","123"]);
});

test('Remove duplicates in emptyArray', () => {
	expect(emptyArray.removeDuplicates()).toStrictEqual([]);
});
