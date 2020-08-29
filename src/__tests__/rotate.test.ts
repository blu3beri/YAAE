import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('rotate right on numberArray', () => {
	expect(numberArray.rotate()).toStrictEqual([10,1,2,3,4,5,6,7,8,9]);
});

test('rotate right on stringArray', () => {
	expect(stringArray.rotate()).toStrictEqual(["e","a","b","c","d"]);
});

test('rotate left on mixedArray', () => {
	expect(mixedArray.rotate(true)).toStrictEqual([2,3,4,"a","b","123",true]);
});

test("rotate left on emptyArrray", () => {
	expect(() => {emptyArray.rotate(true)}).toThrow(Error);
});
