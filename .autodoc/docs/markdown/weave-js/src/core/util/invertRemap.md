[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/util/invertRemap.ts)

The `invertRemap` function in the `weave` project takes in a `Map` object with keys of type `OrigK` and values of type `OrigV`, and a function `keyToValue` that takes in a key of type `OrigK` and a value of type `OrigV` and returns a new value of type `NewV`. The function then returns a new `Map` object with keys of type `OrigV` and values of type `NewV`.

The purpose of this function is to invert the original `Map` object so that the keys become values and the values become keys, while also applying a transformation to the original values to produce new values of a different type. This can be useful in cases where we need to perform lookups based on the original values, but want to use the transformed values as keys.

Here is an example usage of the `invertRemap` function:

```
const originalMap = new Map([
  ['apple', 1],
  ['banana', 2],
  ['orange', 3]
]);

const invertedMap = invertRemap(originalMap, (key, value) => `fruit-${key}-${value}`);

console.log(invertedMap);
// Output: Map(3) { 1 => 'fruit-apple-1', 2 => 'fruit-banana-2', 3 => 'fruit-orange-3' }
```

In this example, we start with a `Map` object where the keys are fruit names and the values are numbers. We then use `invertRemap` to invert the `Map` and apply a transformation to the original values to produce new values of the form `fruit-{fruit name}-{original value}`. The resulting `Map` object has the original values as keys and the transformed values as values.

Overall, the `invertRemap` function in the `weave` project provides a useful utility for inverting `Map` objects and applying transformations to the original values.
## Questions: 
 1. What does the `invertRemap` function do?
   - The `invertRemap` function takes a `Map` object and a function as input, and returns a new `Map` object with the keys and values inverted, while also mapping the original keys to new values using the provided function.

2. What are the input types for the `keyToValue` function?
   - The `keyToValue` function takes two parameters: a key of type `OrigK` and a value of type `OrigV`.

3. What is the output type of the `invertRemap` function?
   - The `invertRemap` function returns a new `Map` object with keys of type `OrigV` and values of type `NewV`.