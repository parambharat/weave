[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/engine)

The `types.ts` file in the `engine` folder of the `weave-js` project defines the `Engine` interface, which is crucial for executing and mapping nodes in the computation pipeline. The interface has two methods: `executeNodes` and `mapNode`.

The `executeNodes` method takes an array of executable nodes (`NodeOrVoidNode` types) and asynchronously resolves them for a result. It has two optional parameters: `stripTags`, which determines whether to strip tags from the result, and `resetBackendExecutionCache`, which determines whether to reset the backend execution cache. The method returns a promise that resolves to an array of any type. Here's an example of how to use the `executeNodes` method:

```javascript
const nodes = [node1, node2, node3];
const engine = new EngineImpl(opStore);
engine.executeNodes(nodes, true, false)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

The `mapNode` method takes a function node and an array of inputs, calls the function node over each element in the input, and returns an array of results. The `node` parameter is a `NodeOrVoidNode` type, and the `inputs` parameter is an array of any type representing the inputs to the function node. The `stripTags` parameter is an optional boolean that determines whether to strip tags from the result. The method returns a promise that resolves to an array of any type. Here's an example of how to use the `mapNode` method:

```javascript
const node = functionNode;
const inputs = [input1, input2, input3];
const engine = new EngineImpl(opStore);
engine.mapNode(node, inputs, true)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

The `Engine` interface is essential for managing the execution of nodes in the larger `weave-js` project. It provides a way to execute and map nodes in the computation pipeline, allowing developers to build complex data processing workflows using the `weave-js` library. The `executeNodes` and `mapNode` methods provide a flexible and powerful way to work with nodes in the computation pipeline, making it easier to build and maintain complex data processing applications.
