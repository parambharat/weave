[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/model/intersection.ts)

The `intersectionOf` function in this code file takes in two `Type` objects and returns their intersection as another `Type` object. The purpose of this function is to find the common members between two types and return them as a new type. 

To achieve this, the function first calls the `membersOf` function on both input types to get an array of their members. It then iterates through the members of the first type and checks if any of them are also present in the members of the second type. If a common member is found, it is added to a `result` array. 

After iterating through all members of the first type, the function checks the length of the `result` array. If it is empty, the function returns the string `'invalid'` to indicate that the intersection is not valid. If the array has only one member, that member is returned as the intersection. Otherwise, the `union` function from the `helpers` module is called on the `result` array to return a new type that represents the union of all common members.

The `membersOf` function is a helper function that takes in a `Type` object and returns an array of all its members. If the input type is not a union type, the function simply returns an array containing the input type. If the input type is a union type, the function recursively calls itself on each member of the union and returns a flattened array of all members.

This code file is likely used in the larger project to handle type intersections between different parts of the codebase. For example, if two functions have different input types but share some common members, the `intersectionOf` function can be used to find the common members and create a new type that represents the intersection of the two input types. This can help ensure that the codebase is consistent and that functions are only called with valid input types. 

Example usage:

```
import { intersectionOf } from 'weave';

type Person = {
  name: string;
  age: number;
  address: string;
};

type Employee = {
  name: string;
  age: number;
  salary: number;
};

const commonMembers = intersectionOf(Person, Employee);
// commonMembers is now { name: string, age: number }
```
## Questions: 
 1. What is the purpose of the `intersectionOf` function?
- The `intersectionOf` function takes in two `Type` objects and returns a new `Type` that represents the intersection of the two input types.

2. What is the `membersOf` function used for?
- The `membersOf` function takes in a `Type` object and returns an array of `Type` objects that represent the members of the input type. If the input type is not a union type, the function returns an array with the input type as its only element.

3. What happens if the `result` array in the `intersectionOf` function is empty?
- If the `result` array is empty, the function returns the string `'invalid'`.