[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/common/state/queryGraph)

The `queryResult.ts` file in the `weave-js/src/common/state/queryGraph` folder is part of the Weave project and provides utility functions for flattening nested objects in an array of objects. These functions are useful for transforming data with nested objects into a format that is easier to work with, such as data visualization, data analysis, or any other application that requires flat data.

The module exports two main functions: `flattenNested` and `flattenNestedObjects`.

`flattenNested` takes an array of objects and returns a new array of objects where all nested objects have been flattened. The function iterates over each object in the input array and creates a new object with all non-nested properties. For each nested property, the function recursively calls itself to flatten the nested object. If the nested property is an array, the function creates a new object for each element in the array and adds the non-nested properties to each object. The function returns an array of all the new objects.

Example usage:

```javascript
import { flattenNested } from 'weave';

const data = [
  { id: 1, name: 'Alice', address: { city: 'New York', state: 'NY' } },
  { id: 2, name: 'Bob', address: { city: 'San Francisco', state: 'CA' } },
];

const flattenedData = flattenNested(data);

console.log(flattenedData);
// Output:
// [
//   { id: 1, name: 'Alice', address_city: 'New York', address_state: 'NY' },
//   { id: 2, name: 'Bob', address_city: 'San Francisco', address_state: 'CA' },
// ]
```

`flattenNestedObjects` takes an object and returns a new object where all nested objects have been flattened. The function iterates over each property in the input object and creates a new object with all non-nested properties. For each nested property, the function recursively calls itself to flatten the nested object. If the nested property is an array, the function ignores it. The function returns a new object with all the non-nested properties and flattened nested properties.

The module also contains two additional functions: `flattenNestedOld` and `flattenNestedObjectsOld`. These functions are similar to `flattenNested` and `flattenNestedObjects`, but they implement an older version of the flattening algorithm.

In the context of the larger Weave project, these utility functions can be used to preprocess data before it is passed to other components or modules that require flat data structures. This can help simplify data manipulation and improve the overall performance of the application.
