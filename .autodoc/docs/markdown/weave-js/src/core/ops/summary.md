[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/ops)

The `weave-js/src/core/ops` folder contains code that provides utility functions for manipulating data types and arrays in the `weave` project. The folder consists of three files: `helpers.ts`, `index.ts`, and `util.ts`, as well as a subfolder named `custom`.

`helpers.ts` defines two functions, `standardOpType` and `standardOpValue`, which apply a given function to a `Type` or a value of any type, respectively, while preserving certain properties. For example, `standardOpType` can be used to change the `name` property of a `Type` while keeping its `nullable` and `mappable` properties intact:

```javascript
import { standardOpType } from 'weave';

const myType = { name: 'string', nullable: true, mappable: true };
const applyFn = (inType) => ({ ...inType, name: 'number' });

const newType = standardOpType(myType, applyFn);
// newType is now { name: 'number', nullable: true, mappable: true }
```

`index.ts` serves as a central hub for exporting the various components of the `weave` project, making it easier for other modules to access and use them. For instance, if another module needs to use a function or class defined in the `custom` folder, it can simply import this module and access the desired component:

```javascript
import { CustomClass } from 'weave';

const instance = new CustomClass();
```

`util.ts` provides utility functions for manipulating arrays. The `spread` function converts an array into an object with numeric keys, while the `generateArrayWithUniformOnes` and `randomlyDownsample` functions randomly select subsets of elements from arrays:

```javascript
const arr = ['a', 'b', 'c'];
const obj = spread(arr);
console.log(obj); // { '0': 'a', '1': 'b', '2': 'c' }

const subset = randomlyDownsample(arr, 2);
console.log(subset); // [2, 4]
```

The `custom` subfolder contains code for normalizing user counts based on certain conditions. The `opMaybeNormalizeUserCounts` function in `repo.ts` normalizes a list of user counts if the `normalize` argument is true:

```javascript
const userCounts = [{created_week: new Date(), user_count: 10}, {created_week: new Date(), user_count: 20}];
const normalizedCounts = await opMaybeNormalizeUserCounts({arr: userCounts, normalize: true});
console.log(normalizedCounts); // [{created_week: new Date(), user_count: 0.3333}, {created_week: new Date(), user_count: 0.6667}]
```

In summary, the `weave-js/src/core/ops` folder provides utility functions for data manipulation and normalization in the `weave` project. These functions are used throughout the project to ensure consistent and predictable data handling.
