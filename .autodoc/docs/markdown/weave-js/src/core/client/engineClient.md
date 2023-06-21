[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/client/engineClient.ts)

The `EngineClient` class provides a client interface on top of the `Engine` class for certain operations, such as `partitionedTableRows`, that use a shared function between the `refineNode` and `resolver` implementations. 

The `EngineClient` class implements the `Client` interface, which defines methods for subscribing to nodes, querying nodes, and performing actions on nodes. The `subscribe` method returns an `Observable` that can be used to listen for changes to a node. The `query` method executes a node and returns the result. The `action` method performs an action on a node. 

The `EngineClient` class also provides methods for managing polling. The `setPolling` method sets the polling state, while the `setIsPolling` method sets the isPolling state. The `isPolling` method returns the current polling state. The `addOnPollingChangeListener` and `removeOnPollingChangeListener` methods add and remove listeners for changes to the polling state. 

The `debugMeta` method returns an object with debug information about the `EngineClient` instance, including the `id` and debug information about the `OpStore`. 

This class is likely used in the larger project to provide a simplified interface for certain operations that use a shared function between the `refineNode` and `resolver` implementations. It may also be used to manage polling for nodes. 

Example usage:

```typescript
import {EngineClient} from 'weave';

const engineClient = new EngineClient(engine);

const node = // create a node

engineClient.query(node).then(result => {
  // handle result
});

const subscription = engineClient.subscribe(node).subscribe(value => {
  // handle value
});

engineClient.setPolling(true);

engineClient.debugMeta(); // returns debug information
```
## Questions: 
 1. What is the purpose of the `EngineClient` class?
- The `EngineClient` class provides a client interface on top of the engine and is used for certain operations that use a shared function between the refineNode and resolver implementations.

2. What methods are currently not implemented in the `EngineClient` class?
- The `subscribe`, `loadingObservable`, `refreshAll`, and `action` methods are currently not implemented in the `EngineClient` class.

3. What is the return type of the `query` method in the `EngineClient` class?
- The `query` method in the `EngineClient` class returns a Promise that resolves to any type.