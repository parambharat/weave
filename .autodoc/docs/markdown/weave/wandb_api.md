[View code on GitHub](https://github.com/wandb/weave/weave/wandb_api.py)

This file provides an official interface for interacting with the W&B API, and all interactions with the Weave API should go through this module. The module contains two classes, `WandbApiAsync` and `WandbApi`, which provide methods for querying the W&B API. 

The `WandbApiAsync` class provides an asynchronous interface for querying the W&B API, while the `WandbApi` class provides a synchronous interface. Both classes have a `query` method that takes a GraphQL query and returns the result of executing the query against the W&B API. 

The `WandbApiAsync` class also has a `server_info` method that returns information about the W&B server, and an `artifact_manifest_url` method that returns the direct URL of the current manifest file for a given artifact. 

The `WandbApi` class has equivalent methods for `server_info` and `artifact_manifest_url`, but they are synchronous. 

The module also defines a `WandbApiContext` dataclass that represents the context for a W&B API request. The context includes the user ID, API key, headers, and cookies for the request. The module provides methods for setting and resetting the W&B API context, as well as a context manager for temporarily setting the context. 

The module uses the `gql` library to execute GraphQL queries against the W&B API. It also uses the `aiohttp` library to provide an asynchronous interface for querying the API. 

Overall, this module provides a convenient and consistent interface for interacting with the W&B API in the larger Weave project. 

Example usage:

```
from weave import wandb_api

# Set the W&B API context
wandb_api.set_wandb_api_context(user_id="my_user_id", api_key="my_api_key")

# Query the W&B API
query = """
    query {
        project(name: "my_project") {
            runs {
                id
                name
            }
        }
    }
"""
result = wandb_api.WandbApi().query(query)

# Get the direct URL of the current manifest file for an artifact
url = await wandb_api.get_wandb_api().artifact_manifest_url(entity_name="my_entity", project_name="my_project", name="my_artifact")
```
## Questions: 
 1. What is the purpose of this module and what does it do?
- This module is the official interface for interacting with the W&B API, and all interactions with the Weave API should go through it.
2. What is the purpose of the `WandbApiContext` class and how is it used?
- The `WandbApiContext` class is used to store information about the user's API key, headers, and cookies. It is used to set the API context for the W&B library.
3. What is the purpose of the `WandbApi` and `WandbApiAsync` classes and how do they differ?
- The `WandbApi` and `WandbApiAsync` classes are used to query the W&B API. The `WandbApi` class is used for synchronous queries, while the `WandbApiAsync` class is used for asynchronous queries.