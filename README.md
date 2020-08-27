# Yet Another Array Extension

Are you sick and tired of writing stuff like ```const lastElement = array[array.length - 1];``` 🤮🤮🤮🤮🤮. Well fear no more, Yet Another Array Extension is here to save the day! (Also, this is like a very small and zero-dependency module OMG WOW).

instead of ```const lastElement = array[array.length - 1];``` 🤮

you now write ```const lastElement = array.last();``` 😲

<hr>

#### Functionality: 

-  ```array.first()``` returns the first element of an array
- ```array.last()``` returns the last element of an array
- ```array.min()``` returns the lowest value of an array
- ```array.max()``` returns the highest value of an array
- ```array.count(item)``` returns amount of times an element occurs in an array
- ```array.includesN(item, amount)``` returns a boolean if the item indeed occurs n times in the array

<hr>

#### Usage:

``` import 'yaae';``` or ```require('yaae');```

that's... it. sorry

<hr>

 #### Notes:

- for min() and max() to work the array has to be of type ```number[]```. 
  - If this is not the case, then it will return NaN.

- if there is no element in ```array.count(item)``` that is equal to item then it will return undefined

<hr>

If anyone has any improvement for this small library then just make an issue or pull request.

<hr>

#### Installation:

If you want to work on it follow these incredibly awesome steps:
```
1. git clone https://www.github.com/blu3beri/yaae.git && cd yaae
3. npm i
4. npm run build
5. cd ../
6. mkdir test-dir && cd test-dir
7. npm init -y
8. npm i ../yaae
9. touch app.ts
10. echo "import 'yaae';" >> app.ts; # for typescript
```

<hr>

#### thanks:

Also I would like to give thanks to this article: [Step by step: Building and publishing an NPM Typescript package.](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c). 
It helped me set everything up since I've never published any node module.
