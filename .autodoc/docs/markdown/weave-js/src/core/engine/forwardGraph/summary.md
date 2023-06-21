[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/engine/forwardGraph)

The `forwardGraph` folder in the `weave-js` project contains the core implementation of a directed acyclic graph (DAG) that represents a computation pipeline. Each node in the graph represents an operation (Op), and edges represent data dependencies between these operations. The code in this folder is responsible for managing the relationships between Ops, specifically handling "tag" consumers and creators, which are used to associate specific Ops with their corresponding input or output data.

The `BaseForwardGraph` class, defined in `base.ts`, is the main class for managing the computation pipeline. It provides utility functions to determine if an Op is a tag consumer or creator, and to extract and connect tag consumers with their respective tag creators. The `updateForwardGraphVisitOp` function is the core function for updating the graph when a new node is added or an existing node is updated. It handles the traversal of the graph, updating the relationships between Ops, and connecting tag providers and consumers.

```javascript
const graph = new BaseForwardGraph(storage);
graph.update(node);
const roots = graph.getRoots();
```

The `HashingStorage` class in `hashing.ts` and the `RefStorage` class in `ref.ts` provide different storage implementations for the forward graph. `HashingStorage` uses a hash table to store nodes and edges, making it efficient for small to medium-sized graphs. `RefStorage` uses a reference counting scheme to manage memory, making it more memory-efficient for large graphs.

The `index.ts` file exports two functions, `newForwardGraph()` and `newRefForwardGraph()`, which create instances of a `BaseForwardGraph` class with either a `HashingStorage` or a `RefStorage` object, respectively.

```typescript
import { newForwardGraph } from 'weave';

const graph = newForwardGraph();
```

The `types.ts` file contains TypeScript interfaces for representing and manipulating a forward graph, such as `ForwardOp`, `ForwardNode`, and `ForwardGraphStorage`.

The `util.ts` file provides a utility function called `forwardOpInputs` that retrieves the input values for a given operation in the graph. This information can be used to execute the operation and produce an output value.

```javascript
const graph = new ForwardGraph();
// add nodes and edges to graph

const op = graph.getOp('myOp');
const inputs = forwardOpInputs(graph, op);
```

Overall, the code in the `forwardGraph` folder is essential for managing a computation pipeline in the larger `weave-js` project. It provides efficient updates and traversal of the graph as new operations are added or existing operations are modified.
