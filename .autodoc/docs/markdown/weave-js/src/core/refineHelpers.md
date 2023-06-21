[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/refineHelpers.ts)

The `weave` module contains several utility functions used throughout the larger project. 

The `replaceInputVariables` function takes a `runNode` and an `opStore` as input and returns a new node with any instances of `runs.index(var('x'))` replaced with `runs.flatten().limit(10)`. This is useful for PanelTable column select expressions during editing, where `index(var('x'))` indicates that the expression will be applied to all rows in the table's underlying array. The resulting type will be a union of the summary types for the first 10 runs in the array. 

The `getStackAtNodeOrOp` function takes a `graph`, `targetNodeOrOp`, `parentStack`, and `opStore` as input and returns the frame (available variables) at `targetNodeOrOp`. This includes the frame provided to the root of the expression, plus any frames added by function literals in which the node was nested. For example, for node `_` in `arr.filter(row => _)`, the frame would be `{arr, row}` (assuming that `arr` was provided at the root). Returns null if the node is not found in `graph`.

The `jsValToCGType` function takes a JavaScript value `val` and returns a corresponding Codegen type. If `val` is null, the function returns `'none'`. If `val` is a string, number, or boolean, the function returns `'string'`, `'number'`, or `'boolean'`, respectively. If `val` is an array, the function returns a list of the union of the types of its elements. If `val` is a table type history key, the function returns the corresponding file path type. If `val` is a `wb_trace_tree` object, the function returns a type object with `type: 'wb_trace_tree'`. If `val` is an object, the function returns a typed dictionary with the same keys as `val` and values that are the corresponding Codegen types. If `val` is none of the above, the function returns `'unknown'`. 

Overall, these functions are used to manipulate and analyze nodes and types within the larger `weave` project.
## Questions: 
 1. What is the purpose of the `replaceInputVariables` function?
- The `replaceInputVariables` function replaces `runs.index(var('x'))` with `runs.flatten().limit(10)` in the `runNode` graph, which means the resulting type will be a union of the summary types for the first 10 runs in the array.

2. What does the `getStackAtNodeOrOp` function do?
- The `getStackAtNodeOrOp` function returns the frame (the available variables) at `targetNodeOrOp`, which will be the frame provided to the root of the expression, plus any frames added by function literals in which the node was nested.

3. What is the purpose of the `jsValToCGType` function?
- The `jsValToCGType` function converts a JavaScript value to a Codegen type, handling various cases such as null, string, number, boolean, array, object, and table type history key.