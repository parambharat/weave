[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/_external)

The `.autodoc/docs/json/weave-js/src/core/_external` folder contains code related to external types and utility functions used throughout the Weave project. The folder is organized into two subfolders: `types` and `util`.

In the `types` subfolder, the `media.ts` file defines interfaces and an export for a `BoundingBox2D` object, which is used to represent bounding boxes in a 2D space. This can be useful for representing the location of objects in images or video frames, and storing additional information such as object type and confidence scores for object detection or classification.

```javascript
const boundingBox: BoundingBox2D = {
  position: {
    middle: [50, 50],
    width: 20,
    height: 30
  },
  class_id: 1,
  box_caption: 'Example bounding box',
  scores: {
    'object_detection': 0.9,
    'object_classification': 0.8
  },
  domain: 'pixel'
};
```

In the `util` subfolder, the `urls.ts` file provides utility functions to generate URLs for various resources within the larger project. These functions accept specific parameters and return a URL string that can be used to access the corresponding resource via HTTP requests.

```javascript
import { artifact } from './urls';

const url = artifact({
  entityName: 'exampleEntity',
  projectName: 'exampleProject',
  artifactTypeName: 'exampleType',
  artifactSequenceName: 'exampleSequence',
  artifactCommitHash: 'exampleHash',
});

console.log(url); // Output: /exampleEntity/exampleProject/artifacts/exampleType/exampleSequence/exampleHash
```

The `vega3.ts` file defines interfaces for representing GraphQL queries in the project. These interfaces (`QueryArg`, `QueryField`, and `Query`) are used to define and manipulate GraphQL queries throughout the project.

```javascript
import { Query, QueryField, QueryArg } from './vega3';

function buildQuery(): Query {
  const queryFields: QueryField[] = [
    {
      name: 'user',
      args: [
        { name: 'id', value: 123 },
      ],
      fields: [
        { name: 'name' },
        { name: 'email' },
      ],
    },
  ];

  return { queryFields };
}

const query = buildQuery();
```

In summary, the code in the `.autodoc/docs/json/weave-js/src/core/_external` folder provides external types and utility functions that are used throughout the Weave project. The `BoundingBox2D` object is used for representing bounding boxes in a 2D space, while the utility functions in the `urls.ts` file generate URLs for various resources. The `vega3.ts` file defines interfaces for representing GraphQL queries, which are used to construct and manipulate queries throughout the project.
