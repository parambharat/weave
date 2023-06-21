[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/ops/util.ts)

The `weave` project includes a file that exports three functions. The first function, `spread`, takes an array of type `X` and returns an object with keys as string indices and values as the elements of the input array. This function can be used to convert an array into an object with numeric keys. For example:

```
const arr = ['a', 'b', 'c'];
const obj = spread(arr);
console.log(obj); // { '0': 'a', '1': 'b', '2': 'c' }
```

The second function, `generateArrayWithUniformOnes`, generates an array of length `N` with `S` uniformly distributed 1s and the rest 0s. This function can be used to randomly select a subset of elements from an array. For example:

```
const arr = [1, 2, 3, 4, 5];
const filter = generateArrayWithUniformOnes(arr.length, 2);
const subset = arr.filter((_, i) => filter[i]);
console.log(subset); // [2, 4]
```

The third function, `randomlyDownsample`, takes an array `array` and a number `n` and returns a new array with `n` randomly selected elements from the input array. If `n` is greater than or equal to the length of the input array, the function returns the original array. This function can be used to randomly select a subset of elements from an array. For example:

```
const arr = [1, 2, 3, 4, 5];
const subset = randomlyDownsample(arr, 2);
console.log(subset); // [2, 4]
```

Overall, these functions provide useful utilities for manipulating arrays in the `weave` project. The `spread` function can be used to convert arrays into objects with numeric keys, while the `generateArrayWithUniformOnes` and `randomlyDownsample` functions can be used to randomly select subsets of elements from arrays.
## Questions: 
 1. What is the purpose of the `spread` function?
- The `spread` function takes an array of type `X` and returns an object with numeric keys and values from the array.

2. What is the purpose of the `generateArrayWithUniformOnes` function?
- The `generateArrayWithUniformOnes` function generates an array of length `N` with `S` uniformly distributed 1s and the rest 0s.

3. What is the purpose of the `randomlyDownsample` function?
- The `randomlyDownsample` function takes an array of type `T` and returns a new array with `n` randomly selected elements from the original array. If `n` is greater than or equal to the length of the original array, the original array is returned.