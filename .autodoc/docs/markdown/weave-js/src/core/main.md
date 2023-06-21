[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/main.ts)

The `weave` project is a collection of modules that provide functionality for creating and interacting with a graph database. This file contains functions for creating and configuring server and client instances that can be used to interact with the database.

The `createLocalServer` function creates a new `LocalServer` instance, which is a server that runs in the same process as the client. It takes a `ServerAPI` object as an argument, which defines the backend that the server will use to store and retrieve data. The function also creates an `InMemoryCache` instance to cache data in memory, and returns the new `LocalServer`.

The `createLocalClient` function creates a new `Client` instance that uses a `LocalServer` as its backend. It takes a `ServerAPI` object as an argument, which is used to create the `LocalServer`. The function also binds the `cgquery` method of the client to the `globalThis` object, which can be useful for debugging.

The `createRemoteServer` function creates a new `RemoteHttpServer` instance, which is a server that communicates with a remote server over HTTP. It takes several arguments, including the URL of the remote server, a function that returns an authentication token, and an `OpStore` object that is used to store and retrieve operations. The function returns the new `RemoteHttpServer`.

The `createRemoteClient` function creates a new `Client` instance that uses a `RemoteHttpServer` as its backend. It takes several arguments, including the URL of the remote server, a function that returns an authentication token, and an `OpStore` object that is used to store and retrieve operations. The function also binds the `cgquery` method of the client to the `globalThis` object, which can be useful for debugging.

The `createServerWithShadow` function creates a new `ServerWithShadow` instance, which is a server that uses a primary server and a shadow server to provide fault tolerance. It takes two `Server` instances as arguments, and returns the new `ServerWithShadow`.

The `createdRoutedPerformanceServer` function creates a new `RoutedServer` instance, which is a server that routes requests to different backends based on the type of operation being performed. It takes two `Server` instances as arguments, and returns the new `RoutedServer`.

The `performanceRouter` function is a helper function used by `createdRoutedPerformanceServer` to determine which backend to route requests to. It takes two `Server` instances as arguments, and returns an object containing a routing function and an `OpStore` object.

Overall, these functions provide a flexible way to create and configure server and client instances that can be used to interact with a graph database. By using different combinations of these functions, developers can create custom configurations that meet their specific needs.
## Questions: 
 1. What is the purpose of the `weave` project?
- The purpose of the `weave` project is not explicitly stated in this code file.

2. What is the role of the `createRemoteClient` function?
- The `createRemoteClient` function creates a client that communicates with a remote server over HTTP, using a provided URL and token function.

3. What is the purpose of the `performanceRouter` function?
- The `performanceRouter` function determines which server to use for a given node based on the supported engines for that node, and returns a routing function and an opStore.