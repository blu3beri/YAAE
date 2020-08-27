import '../index';

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["a","b","c","d","e","d","e","d","e","e","e","234"];
const mixedArray = [true,2,3,4,"a","b","123"];
const emptyArray: string[] = []; // Jest wanted me to give it a type such as string[], any[] did not work. No clue why ;)

test('first from number array', () => {
    expect(numberArray.last()).toBe(10);
});

test('first from string array', () => {
    expect(stringArray.last()).toBe("234");
});

test('first from mixed array', () => {
    expect(mixedArray.last()).toBe("123");
});

test('first from empty array', () => {
    expect(emptyArray.last()).toEqual(undefined);
});