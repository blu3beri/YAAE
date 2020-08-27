import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('last from number array', () => {
    expect(numberArray.first()).toBe(1);
});

test('last from string array', () => {
    expect(stringArray.first()).toBe("a");
});

test('last from mixed array', () => {
    expect(mixedArray.first()).toBe(true);
});

test('last from empty array', () => {
    expect(emptyArray.first()).toEqual(undefined);
});