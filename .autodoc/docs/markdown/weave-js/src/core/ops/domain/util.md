[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/ops/domain/util.ts)

The `connectionToNodes` function is a helper function that is used to convert a `connection` type returned from GraphQL (gql) to its list of nodes. This function is used in many locations in the application where the GQL schema looks like the one described in the code comments. The schema consists of types such as `Thing`, `House`, `ThingEdge`, and `ThingConnection`. 

The `ThingConnection` type has a required list of required items called `edges`, which is an array of `ThingEdge` objects. The `ThingEdge` object has a required field called `node`, which is of type `Thing`. However, if the user does not have authorization to view a `Thing`, then the `node` field will be null. 

The purpose of the `connectionToNodes` function is to handle nulls or invalid structures properly and filter out the nulls. This function is used by resolvers to walk an object that is expected (but not required) to be a `connection` type. The function takes a `MaybeConnection` type as input, which is a union of an object with an optional `edges` field that is an array of objects with an optional `node` field of type `T`, null, or undefined. The function returns an array of non-null `T` nodes.

Here is an example of how the `connectionToNodes` function can be used:

```typescript
interface Thing {
  id: string;
  name: string;
}

interface ThingEdge {
  node: Thing | null;
}

interface ThingConnection {
  edges: ThingEdge[];
}

const connection: ThingConnection = {
  edges: [
    { node: { id: "1", name: "Thing 1" } },
    { node: null },
    { node: { id: "2", name: "Thing 2" } },
  ],
};

const nodes = connectionToNodes(connection);
console.log(nodes); // [{ id: "1", name: "Thing 1" }, { id: "2", name: "Thing 2" }]
```

In this example, the `connection` object has three `ThingEdge` objects, one of which has a null `node` field. The `connectionToNodes` function filters out the null `node` and returns an array of two `Thing` objects.
## Questions: 
 1. What is the purpose of the `connectionToNodes` function?
- The `connectionToNodes` function is a helper function that can be used by resolvers to convert a `connection` type returned from gql to its list of non-null nodes, handling nulls or invalid structure properly, and filtering out the nulls.

2. What is the `MaybeConnection` type?
- The `MaybeConnection` type is a union type that represents a `connection` type that may or may not have a list of edges, where each edge may or may not have a node of type `T`.

3. Why was this function created?
- This function was created to address inconsistent ways of checking for nulls in resolvers that expect to return a list of non-null nodes, specifically when dealing with `connection` types that may have null nodes due to authorization restrictions.