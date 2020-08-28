import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('insert on numberArray', () => {
	expect(numberArray.insert(2, 99)).toStrictEqual([1,2,99,3,4,5,6,7,8,9,10]);
});

test("insert on numberArray with index out of range", () => {
	expect(() => {numberArray.insert(9001, 10)}).toThrow(RangeError);
});

test('insert on string array', () => {
	expect(stringArray.insert(2, true)).toStrictEqual(["a","b",true,"c","d","e","d","e","d","e","e","e"]);
});

test("insert on empty arrray", () => {
	expect(() => {emptyArray.insert(0, 1)}).toThrow(RangeError);
});
