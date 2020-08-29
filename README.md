# Yet Another Array Extension

Are you sick and tired of writing stuff like ```const lastElement = array[array.length - 1];``` 🤮🤮🤮🤮🤮. Well fear no more, Yet Another Array Extension is here to save the day! (Also, this is like a very small and zero-dependency module OMG WOW).

instead of ```const lastElement = array[array.length - 1];``` 🤮

you now write ```const lastElement = array.last();``` 😲

<hr>

## Functions

- **Function** ```Array.first()```
  - This function finds the first item in the array
  - **Returns** the first element of the array
- **Functrion** ```Array.last()```
  - This function finds the last item in the array
  - **Returns** the last element of the array
- **Function** ```Array.max()```
  - This function finds the highest value in the array
  - **Returns** the highest value of the array
  - **Throws** TypeError if every item in the array is not of type number
- **Function** ```Array.min()```
  - This function finds the lowest value of the array
  - **Returns** The lowest value of the array
  - **Throws** TypeError when every element in the array is not of type number
- **Function** ```Array.count(item)```
  - This function counts how many times ```item``` occurs in the array
  - **Params**
    - ```item``` any item that occurs in the array
  - **Returns** the amount of times the ```item``` occurs in the array
- **Function** ```Array.includesN(item, amount)```
  - This function checks whether ```item``` occurs ```amount``` times
  - **Params**
    - ```item``` any item that occurs in the array
    - ```amount``` how many times you want to check if the item is in the array
  - **Returns** a boolean that shows if the  ```item``` occurs ```amount``` of times in the array
  - **Throws** TypeError is ```amount``` is not of type number
- **Function** ```Array.duplicates()```
  - This functions gives all the duplicates in the array back
  - **Returns** an array of the items that occur multiple times in the array
- **Function** ```Array.removeDuplicates()```
  - This function removes all the duplicates in the array
  - **Returns** an array where all the duplicates are removed
- **Function** ```Array.math(operator, value)```
  - This function does a math operation on every item in the array based on the given value
  - **Params**
    - ```operator``` math operator like +, -, * or /
    - ```value``` a number that you want to use for the operation
  - **Returns** an array where every item has been operated on based on the value
  - **Throws** TypeError if the operator is not +, -, * or /
  - **Throws** TypeError if the value is not of type number
  - **Throws** TypeError if every item in the array is not of type number
- **Function** ```Array.even()```    
  - This function finds the even numbers in a given array
  - **Returns** an array of even numbers
  - **Throws** TypeError if every item in the array is not of type number
- **Function** ```Array.odd()```    
  - This function finds the odd numbers in a given array
  - **Returns** an array of odd numbers
  - **Throws** TypeError if every item in the array is not of type number
- **Function** ```Array.insert(index, item)```    
  - Inserts an item on the index position and shifts everything after
  - **Params**
    - ```index``` the position where you want to insert
    - ```item``` what you want to insert
  - **Returns** an array with the item inserted on the index position (shifts all the items after index + 1)
  - **Throws** TypeError index is not a number
  - **Throws** RangeError if index is out of range
- **Function** ```Array.replace(index, item)```    
  - Replaces an item in the given array at the index
  - **Params**
    - ```index``` the position where you want to insert
    - ```item``` what you want to insert
  - **Returns** an array where the item at index is replaced by the new item
  - **Throws** TypeError index is not a number
  - **Throws** RangeError if index is out of range
- **Function** ```Array.repeat(index, amount)```    
  - Finds the item by index and repeats it a given amount of times
  - **Params**
    - ```index``` the index of the item that you want to repeat
    - ```Amount``` the amount of times you want to repeat is
  - **Returns** array of odd numbers
  - **Throws** TypeError index is not a number
  - **Throws** TypeError if amount is not of type number
  - **Throws** RangeError if index is out of range
- **Function** ```Array.rotate(reverse)```    
  - Rotates an array right or left based on the parameter
  - **Params**
    - ```reverse``` true -> rotate left. false -> rotate right. default -> false
  - **Returns** an array where the items are rotated
  - **Throws** TypeError if reverse is not of type boolean

<hr>

## Examples

```typescript
import('yaae');

const arr = [1,2,3,4,5,6,7,8,9,10];

arr.first();
// returns 1

arr.last();
// returns 10

arr.min();
// returns 1

arr.max();
// returns 10

arr.count(2);
// returns 1

arr.includesN(10, 50);
// returns false

arr.duplicates();
// returns []

arr.removeDuplicates();
// returns [1,2,3,4,5,6,7,8,9,10]

arr.math("+", 10);
// returns [11,12,13,14,15,16,17,18,19,20]

arr.even()
// returns [2,4,6,8,10]

arr.odd()
// returns [1,3,5,7,9]

arr.insert(10,2);
// returns [1,2,10,3,4,5,6,7,8,9,10]

arr.replace(10,2);
// returns [1,2,10,4,5,6,7,8,9,10]

arr.repeat(2,5);
// returns [1,2,3,3,3,3,3,3,4,5,6,7,8,9,10]

arr.rotate(true)
// returns [2,3,4,5,6,7,8,9,10,1]
```

<hr>

## But, why?

Well, I get that. Almost every function that I added to the ```Array``` is very easy to code. And it was never the point to create difficult functionality and make the ```Array``` object better. It was more to make code more readable. ```array[array.length - 1];``` for example, everyone knows that it is the last item in an array, but wouldn't ```array.last();``` make so much more sense? Ofcourse if in the future I come up with more difficult functionality it would be a great addition.

<hr>

## Contributing

If you want to add functionality or complain about something. Feel free to open an issue or pull request on my github and if I am still working on this project I will review it. If I am not working anymore on this project feel free to clone it and continue development.

<hr>

## testing

Testing has been done with jest. Note that I am no where near an expert with this type of testing and if anyone feels like they can improve on it... I won't stop you :).