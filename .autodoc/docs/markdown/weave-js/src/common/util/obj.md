[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/util/obj.ts)

The `weave` project includes a file with several utility functions. 

The `notEmpty` function is a type predicate that checks if a value is not null or undefined. This function is useful when filtering arrays to remove null or undefined values. For example, `['a', null, 'b'].filter(notEmpty)` would return `['a', 'b']`.

The `deepMapValuesAndArrays` function recursively maps over an object or array and applies a given function to each value. If the input is an array, the function maps over each item and recursively calls itself on each item. If the input is an object, the function maps over each value and recursively calls itself on each value. The function returns a new object or array with the mapped values. This function can be useful for transforming data structures. For example, `deepMapValuesAndArrays({a: [1, 2], b: {c: 3}}, v => v * 2)` would return `{a: [2, 4], b: {c: 6}}`.

The `shallowEqual` function checks if two objects are equal by comparing their keys and values. If the objects have different keys or values, the function returns false. This function can be useful for checking if two objects have changed. For example, `shallowEqual({a: 1, b: 2}, {a: 1, b: 2})` would return `true`, while `shallowEqual({a: 1, b: 2}, {a: 1, b: 3})` would return `false`.

The `zip` function takes any number of arrays and returns an array of objects where each key is the index of the input arrays and each value is the corresponding value at that index. This function can be useful for combining data from multiple arrays. For example, `zip([1, 2], ['a', 'b'])` would return `[{0: 1, 1: 'a'}, {0: 2, 1: 'b'}]`.

Overall, these utility functions can be used to manipulate and transform data structures in the `weave` project.
## Questions: 
 1. What is the purpose of the `notEmpty` function?
   - The `notEmpty` function is a type predicate that checks if a value is not null or undefined and returns a boolean. It is useful for filtering arrays and the returned type will be a string array.

2. What does the `shallowEqual` function do?
   - The `shallowEqual` function takes in two objects and returns a boolean indicating whether they are shallowly equal, meaning they have the same properties and values at the top level.

3. What is the purpose of the `zip` function and how does it work?
   - The `zip` function takes in an array of arrays and returns a new array of objects where each object has properties corresponding to the elements at the same index in each array. The `DeArray` type is used to extract the element type of an array, and the `Pivot` type is used to create an array of objects with properties based on the input arrays. The `zip` function itself uses the `_.zip` function from the Lodash library to combine the arrays.