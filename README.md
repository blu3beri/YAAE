# Yet Another Array Extension

Are you sick and tired of writing stuff like ```const lastElement = array[array.length - 1];``` 🤮🤮🤮🤮🤮. Well fear no more, Yet Another Array Extension is here to save the day! (Also, this is like a very small and zero-dependency module OMG WOW).

instead of ```const lastElement = array[array.length - 1];``` 🤮

you now write ```const lastElement = array.last();``` 😲

<hr>

## Functions

- **Function** ```Array.first()```
  - **Returns** the first element of the given array
- **Functrion** ```Array.last()```
  - **Returns** the last element of the given array
- **Function** ```Array.max()```
  - **Returns** the highest value of the given array
  - **Throws** TypeError when every element in the given array is not of type number
- **Function** ```Array.min()```
  - **Returns** The lowest value of the given array
  - **Throws** TypeError when every element in the given array is not of type number
- **Function** ```Array.count(item)```
  - **Returns** the amount of times the ```item``` occurs in the array
- **Function** ```Array.includesN(item, amount)```
  - **Returns** a boolean that shows if the given ```item``` occurs ```amount``` of times in the array
  - **Throws** TypeError is ```amount``` is not of type number
- **Function** ```Array.duplicates()```
  - **Returns** an array of the items that occur multiple times in the array
- **Function** ```Array.removeDuplicates()```
  - **Returns** an array where all the duplicates are removed
- **Function** ```Array.math(operator, value)```
  - **Returns** an array where every item has been operated on based on the value
  - **Throws** TypeError if the operator is not +, -, * or /
  - **Throws** TypeError if the value is not of type number
  - **Throws** TypeError if the every item in the list is not of type number



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
```



## But, why?

Well, I get that. Almost every function that I added to the ```Array``` is very easy to code. And it was never the point to create difficult functionality and make the ```Array``` object better. It was more to make code more readable. ```array[array.length - 1];``` for example, everyone knows that it is the last item in an array, but wouldn't ```array.last();``` make so much more sense? Ofcourse if in the future I come up with more difficult functionality it would be a great addition.



## Contributing

If you want to add functionality or complain about something. Feel free to open an issue or pull request on my github and if I am still working on this project I will review it. If I am not working anymore on this project feel free to clone it and continue development.



## testing

Testing has been done with jest. Note that I am no where near an expert with this type of testing and if anyone feels like they can improve on it... I won't stop you :).