[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/analytics/tracker.ts)

The `CGEventTracker` class is used to track various critical points in the CG (Codegen) execution flow. It has hard-coded fields that track the number of times the router client routes to the remote and local clients, the number of times the remote client is called, the number of cache hits, the total number of basic client subscriptions, the total number of batches sent to the local and remote engines, the total number of expanded forward graph nodes in the local engine, the total number of op resolvers executed in the local engine, and the number of requests sent to the shadow server. 

The class has a constructor that initializes the `startDate` field to the current date and time. It also has a `reset()` method that resets all the fields to zero and sets the `startDate` field to the current date and time. The `summary()` method calculates some fields based on the tracked data and returns an object with the summary of the tracked data. 

The `GlobalCGEventTracker` constant is an instance of the `CGEventTracker` class that can be used to track the critical points in the CG execution flow globally. It can be imported and used in other files of the `weave` project to track the CG execution flow. 

Example usage:

```
import { GlobalCGEventTracker } from 'weave';

// Track the CG execution flow
GlobalCGEventTracker.routedServerRemote++;
GlobalCGEventTracker.cachedClientSubscriptions++;
GlobalCGEventTracker.localServerQueryBatchRequests++;

// Get the summary of the tracked data
const summary = GlobalCGEventTracker.summary();
console.log(summary);
```
## Questions: 
 1. What is the purpose of the `CGEventTracker` class?
- The `CGEventTracker` class is used to track various metrics related to the execution flow of the project's CG (code generation) process.

2. What are some of the metrics being tracked by the `CGEventTracker` class?
- Some of the metrics being tracked by the `CGEventTracker` class include the number of times the router client routes to the remote and local clients, the number of cache hits in the remote client's caching layer, and the number of batches sent to the local and remote engines.

3. What is the purpose of the `summary()` method in the `CGEventTracker` class?
- The `summary()` method calculates various metrics based on the tracked data and returns them in a structured format.