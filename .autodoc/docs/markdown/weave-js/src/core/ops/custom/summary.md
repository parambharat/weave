[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/ops/custom)

The `custom` folder in the `weave-js/src/core/ops` directory contains two files, `index.ts` and `repo.ts`, which are part of the `weave` project. These files are responsible for handling the normalization of user counts based on certain conditions.

`index.ts` is a module that exports all the functionality of the `repo` module. It imports the `repo` module and then exports all its functionality, making it available to other modules that import from this file. This simplifies the import process for other modules in the `weave` project and makes it easier to access the functionality of the `repo` module. For example:

```javascript
import { opMaybeNormalizeUserCounts } from 'weave';
```

`repo.ts` defines a function called `opMaybeNormalizeUserCounts` that normalizes a list of user counts if a certain condition is met. The function takes two arguments: `arr` (the list of user counts to normalize) and `normalize` (a boolean value that determines whether or not to normalize the list).

The function first checks if the length of the input list is zero. If it is, the function returns the input list. If not, the function proceeds to normalize the list. It creates a new array called `arr2` and initializes a variable called `minDate` to the maximum date value. The function then iterates over each item in the input list and checks if the `created_week` and `user_count` properties are not null. If either of these properties is null, the function returns the input list. If both properties are not null, the function checks if the `created_week` property is less than `minDate`. If it is, the function updates `minDate` to the value of `created_week`. The function then pushes the current item to the `arr2` array.

The function then filters the `arr2` array to only include items with a `created_week` property equal to `minDate`. The function then calculates a normalization factor by summing the `user_count` values of the filtered array. The function then maps over the `arr2` array and returns a new array where each item has a `user_count` property that is divided by the normalization factor.

An example usage of this function would be:

```javascript
const userCounts = [{created_week: new Date(), user_count: 10}, {created_week: new Date(), user_count: 20}];
const normalizedCounts = await opMaybeNormalizeUserCounts({arr: userCounts, normalize: true});
console.log(normalizedCounts); // [{created_week: new Date(), user_count: 0.3333}, {created_week: new Date(), user_count: 0.6667}]
```

In summary, the `custom` folder in the `weave-js/src/core/ops` directory contains code that handles the normalization of user counts based on certain conditions. The `index.ts` file exports the functionality of the `repo` module, while the `repo.ts` file defines the `opMaybeNormalizeUserCounts` function that normalizes user counts if the `normalize` argument is true.
