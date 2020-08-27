import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('max from number array', () => {
    expect(numberArray.max()).toBe(10);
});

test('max from string array', () => {
    expect(stringArray.max()).toEqual(NaN);
});

test('max from mixed array', () => {
    expect(mixedArray.max()).toBe(NaN);
});

test('max from empty array', () => {
    expect(emptyArray.max()).toEqual(undefined);
});