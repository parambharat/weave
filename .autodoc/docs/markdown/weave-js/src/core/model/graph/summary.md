[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/model/graph)

The `graph` folder in the `weave-js` project contains code related to the core data flow graph model, including node construction, graph normalization, stack manipulation, and type checking. The code in this folder is essential for building and manipulating the data flow graph, which is a key component of the Weave data visualization platform.

For example, the `construction.ts` file provides functions for creating constant and variable nodes, such as `constNode` and `varNode`. These nodes are used to represent values and variables in the data flow graph. The `constFunction` function is used to create a constant node that represents a function, taking an object of input types and a function body that returns a node of the output type.

```typescript
import { constNode, varNode } from 'weave';

const myConstNode = constNode('number', 42);
const myVarNode = varNode('string', 'x');
```

The `norm.ts` file exports a function called `graphNorm` that normalizes a graph of editing nodes and creates a `NormGraph` object that maps each node and operation to a unique ID. This can be useful for comparing two graphs to see if they are equivalent or for optimizing the graph by identifying redundant nodes.

```typescript
import { graphNorm, NormGraph } from 'weave';

const normGraph: NormGraph = graphNorm(node3);
```

The `stack.ts` file contains functions related to stack and frame manipulation, as well as variable resolution. These functions, such as `emptyStack`, `pushFrame`, and `resolveVar`, can be used in various parts of the Weave project where stack manipulation and variable resolution are needed.

```typescript
const myStack = emptyStack();
const myFrame = {foo: 'bar', baz: 42};
const newStack = pushFrame(myStack, myFrame);
const myVar = resolveVar(newStack, 'foo');
```

The `typeHelpers.ts` file defines a set of functions and type guards for working with nodes in the Weave project, allowing for checking the type of a given node and its properties. Functions like `isConstNodeWithType` can be used to ensure that nodes and their outputs are used correctly in the data flow graph.

```typescript
import { isConstNodeWithType } from 'weave';

const myNode = {
  type: 'number',
  nodeType: 'const',
  value: 42,
};

if (isConstNodeWithType(myNode, 'number')) {
  console.log(myNode.value); // Output: 42
}
```

Lastly, the `types.ts` file contains various interfaces and types used in the Weave project to represent nodes and operations in the data flow graph, such as `BaseNode`, `OutputNode`, `VarNode`, and `ConstNode`.

Overall, the code in the `graph` folder is crucial for building, manipulating, and validating the data flow graph in the Weave project, enabling the creation of complex data visualizations.
