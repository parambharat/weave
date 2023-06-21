[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/model)

The `core/model` folder in the Weave project contains essential code for working with typed dictionaries, lists, and the Weave Type System. It also exports various modules related to graphs, media, modifiers, and types, making it easier for other parts of the project to import and use these modules.

For example, the `helpers2.ts` file provides functions for retrieving values and types from nested paths within typed dictionaries and lists. This can be useful when working with complex data structures in the project:

```typescript
import { typedDictPathVal, typedDictPathType } from 'weave';

const person = {
  address: {
    city: 'New York',
    street: 'Main St',
  },
};

const cityValue = typedDictPathVal(person, ['address', 'city']); // 'New York'
const cityType = typedDictPathType(person, ['address', 'city']); // 'string'
```

The `intersection.ts` file contains a function for finding the intersection of two types, which can be helpful when working with functions that have different input types but share some common members:

```typescript
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

The `types.ts` file defines the Weave Type System, which is a collection of types and interfaces used throughout the project. This type system helps maintain type safety and consistency, ensuring that the code is robust and less prone to errors:

```typescript
export interface ListType<T extends Type = Type> {
  type: 'list';
  objectType: T;
  minLength?: number;
  maxLength?: number;
}
```

The `graph` subfolder contains code related to the core data flow graph model, including node construction, graph normalization, stack manipulation, and type checking. This code is essential for building and manipulating the data flow graph, a key component of the Weave data visualization platform:

```typescript
import { constNode, varNode } from 'weave';

const myConstNode = constNode('number', 42);
const myVarNode = varNode('string', 'x');
```

In summary, the `core/model` folder and its subfolders provide essential code for working with typed dictionaries, lists, the Weave Type System, and the data flow graph model. These components are crucial for building complex data visualizations and maintaining type safety and consistency throughout the project.
