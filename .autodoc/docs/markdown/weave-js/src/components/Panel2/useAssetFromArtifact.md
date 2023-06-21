[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/Panel2/useAssetFromArtifact.ts)

The `weave` project is a library for building data pipelines. This file contains several React hooks that are used to retrieve and manipulate data from assets in the pipeline. 

The `useAssetURLFromArtifact` hook takes an input node and returns an object with the loading state, the asset object, and a direct URL to the asset file. The `useAssetContentFromArtifact` hook is similar, but instead of returning a URL, it returns the contents of the asset file. 

Both hooks use the `CGReact.useNodeValue` hook to retrieve the value of the input node. They then use the `opAssetArtifactVersion` and `opArtifactVersionFile` functions to retrieve the artifact and file nodes associated with the asset. These nodes are then used to retrieve the direct URL or contents of the asset file. 

The `useSignedUrlWithExpiration` hook is used internally by `useAssetURLFromArtifact` to retrieve a signed URL for the asset file. It uses the `useDirectUrlNodeWithExpiration` hook to retrieve a direct URL node that is guaranteed to not be expired. This is done by leveraging a custom op that accepts an `asOf` argument. The Weave system caches ops based on the input values, so getting a node with the current timestamp will always fetch a new URL. To protect from requesting new nodes too often, subsequent calls are guarded with a time to live (ttl). 

Overall, these hooks provide a convenient way to retrieve and manipulate data from assets in the Weave data pipeline. Here is an example usage of `useAssetURLFromArtifact`:

```
import {useAssetURLFromArtifact} from 'weave';

const MyComponent = ({assetNode}) => {
  const {loading, asset, directUrl} = useAssetURLFromArtifact(assetNode);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{asset.name}</h1>
      <img src={directUrl} alt={asset.name} />
    </div>
  );
};
```
## Questions: 
 1. What is the purpose of the `weave` project?
- The code imports modules from `@wandb/weave/core` and `react`, suggesting that `weave` is a project that involves data visualization and manipulation using React.

2. What is the purpose of the `useAssetURLFromArtifact` function?
- The function takes an input node and returns an object with the loading status, asset, and direct URL of the asset. It appears to be a helper function for retrieving the URL of an asset from an artifact.

3. What is the purpose of the `useSignedUrlWithExpiration` function?
- The function takes a file node and a time-to-live (TTL) value and returns an object with the signed URL and loading status. It appears to be a helper function for retrieving a signed URL for a file with a TTL to prevent excessive requests.