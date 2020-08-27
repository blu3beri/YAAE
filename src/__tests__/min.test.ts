import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('min from number array', () => {
    expect(numberArray.min()).toBe(1);
});

test('min from string array', () => {
    expect(stringArray.min()).toEqual(NaN);
});

test('min from mixed array', () => {
    expect(mixedArray.min()).toBe(NaN);
});

test('min from empty array', () => {
    expect(emptyArray.min()).toEqual(undefined);
});