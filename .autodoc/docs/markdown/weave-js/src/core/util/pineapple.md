[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/util/pineapple.ts)

The `weave` project contains a file that exports a function called `pineapple` and another function called `unpineapple`. The `pineapple` function takes an object and returns a new object that is a "pineapple" representation of the original object. The `unpineapple` function takes a "pineapple" object and returns the original object. 

The `pineapple` function takes two arguments: `food` and `optsIn`. `food` is the object to be transformed into a "pineapple" object. `optsIn` is an optional object that can be used to customize the behavior of the function. The `pineapple` function returns an object that has two properties: a property with the key specified in the `optsIn` object (or the default key if none is specified) that contains a reference to the root object, and a `refs` property that contains an array of all the objects in the original object graph. 

The `unpineapple` function takes two arguments: `encoded` and `optsIn`. `encoded` is the "pineapple" object to be transformed back into the original object. `optsIn` is an optional object that can be used to customize the behavior of the function. The `unpineapple` function returns the original object. 

The `pineapple` function works by creating a new object that has the same structure as the original object, but with all the objects replaced by references to those objects. The `unpineapple` function works by replacing all the references in the "pineapple" object with the actual objects they refer to. 

The `pineapple` function uses an `ObjectNormalizer` class to create a map of all the objects in the original object graph. The `ObjectNormalizer` class has a `normalize` method that takes an object and returns a `NormObjectMap`. The `normalize` method works by recursively visiting all the objects in the original object graph and assigning each object a unique ID. The `NormObjectMap` is a `Map` that maps each object in the original object graph to its unique ID. 

The `pineapple` function then uses the `invertRemap` function from the `invertRemap` module to create a new object that has the same structure as the "pineapple" object, but with all the references replaced by the actual objects they refer to. The `invertRemap` function takes the `NormObjectMap` created by the `ObjectNormalizer` class and a callback function that is called for each object in the original object graph. The callback function takes two arguments: the object and its unique ID. The `invertRemap` function returns a new object that has the same structure as the "pineapple" object, but with all the references replaced by the actual objects they refer to. 

Here is an example of how to use the `pineapple` and `unpineapple` functions:

```javascript
import { pineapple, unpineapple } from 'weave';

const obj = {
  foo: 'bar',
  baz: {
    qux: [1, 2, 3],
  },
};

const pineappleObj = pineapple(obj);

console.log(pineappleObj);
// { "🍍": { "🍍": 0 }, "refs": [ { "foo": "bar", "baz": { "qux": [ 1, 2, 3 ] } }, { "qux": [ 1, 2, 3 ] } ] }

const unpineappledObj = unpineapple(pineappleObj);

console.log(unpineappledObj);
// { foo: 'bar', baz: { qux: [ 1, 2, 3 ] } }
```
## Questions: 
 1. What is the purpose of the `ObjectNormalizer` class?
- The `ObjectNormalizer` class is used to create a flat map of objects that may still be nested.

2. What is the purpose of the `pineapple` function?
- The `pineapple` function is used to serialize a JavaScript object into a JSON-compatible format.

3. What is the purpose of the `unpineapple` function?
- The `unpineapple` function is used to deserialize a JSON-compatible format back into a JavaScript object.