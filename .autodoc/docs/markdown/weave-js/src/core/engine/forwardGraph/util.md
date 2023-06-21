[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/engine/forwardGraph/util.ts)

The `weave` project includes a file that contains a function called `forwardOpInputs`. This function takes in two parameters: a `ForwardGraph` object and a `ForwardOp` object. The purpose of this function is to return an object that maps input names to their corresponding values for a given `ForwardOp`. 

The `ForwardGraph` object represents a directed acyclic graph (DAG) of operations, where each node represents an operation and each edge represents a data dependency between operations. The `ForwardOp` object represents a single operation in the graph. 

The function uses the `mapValues` method from the `lodash` library to iterate over the `inputs` object of the given `ForwardOp`. For each input, the function checks the `nodeType` property to determine how to retrieve its value. 

If the `nodeType` is `'output'`, the function retrieves the value of the output node's `result` property from the `ForwardOp` object that the input is connected to. This is done by using the `getOp` method of the `ForwardGraph` object to retrieve the `ForwardOp` object that the output node is connected to. 

If the `nodeType` is `'const'`, the function retrieves the value of the `val` property from the input node. 

If the `nodeType` is `'var'`, the function returns `undefined` since the value of the input is not yet known. 

The function then returns an object that maps each input name to its corresponding value. 

This function is likely used in the larger `weave` project to retrieve the input values for a given operation in the graph. This information can then be used to execute the operation and produce an output value. 

Example usage:

```
const graph = new ForwardGraph();
// add nodes and edges to graph

const op = graph.getOp('myOp');
const inputs = forwardOpInputs(graph, op);
// inputs is an object that maps input names to their corresponding values
// use inputs to execute the operation and produce an output value
```
## Questions: 
 1. What is the purpose of the `forwardOpInputs` function?
   - The `forwardOpInputs` function takes in a `ForwardGraph` and a `ForwardOp` and returns an object containing the inputs for the given `ForwardOp`.
2. What is the `mapValues` function from lodash being used for?
   - The `mapValues` function is being used to iterate over the `inputs` object of the given `ForwardOp` and return a new object with the same keys but with the values transformed based on the logic in the function.
3. What are the possible values for `inputNode.nodeType` and how are they handled in the function?
   - The possible values for `inputNode.nodeType` are `'output'`, `'const'`, and `'var'`. They are handled differently in the function: if it is `'output'`, the function retrieves the output value from the corresponding `ForwardOp`; if it is `'const'`, the function returns the constant value; if it is `'var'`, the function returns `undefined`.