import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('last on numberArray', () => {
    expect(numberArray.first()).toBe(1);
});

test('last on stringArray', () => {
    expect(stringArray.first()).toBe("a");
});

test('last on mixedArray', () => {
    expect(mixedArray.first()).toBe(true);
});

test('last on emptyArray', () => {
    expect(emptyArray.first()).toEqual(undefined);
});