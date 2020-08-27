# Yet Another Array Extension

Are you sick and tired of writing stuff like ```const lastElement = array[array.length - 1];``` 🤮🤮🤮🤮🤮. Well fear no more, Yet Another Array Extension is here to save the day! (Also, this is like a very small and zero-dependency module OMG WOW).

instead of ```const lastElement = array[array.length - 1];``` 🤮

you now write ```const lastElement = array.last();``` 😲

<hr>

Functionality: 

```array.first()``` returns the first element of an array
```array.last()``` returns the last element of an array
```array.min()``` returns the lowest value of an array
```array.max()``` returns the highest value of an array
```array.count(item)``` returns amount of times an element occurs in an array

<hr>

note: for min() and max() to work the array has to be of type ```number[]```. If this is not the case, then it will return NaN.

note: if there is no element in ```array.count(item)``` that is equal to item then it will return undefined

<hr>

If anyone has any improvement for this small library then just make an issue or pull request.



