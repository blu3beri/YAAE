import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('replace on numberArray', () => {
    expect(numberArray.replace(2, 99)).toStrictEqual([1,2,99,4,5,6,7,8,9,10]);
});

test("replace on numberArray with index out of range", () => {
	expect(() => {numberArray.replace(9001, 10)}).toThrow(RangeError);
});

test('replace on string array', () => {
    expect(stringArray.replace(2, true)).toStrictEqual(["a","b",true,"d","e","d","e","d","e","e","e"]);
});

test("replace on empty arrray", () => {
	expect(() => {emptyArray.replace(0, 1)}).toThrow(RangeError);
});