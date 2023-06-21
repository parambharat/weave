[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave/ecosystem/langchain)

The `langchain` folder in the Weave project contains code related to language models, embeddings, and document retrieval. It sets up the context for the project by importing necessary modules and managing the state of the context, allowing the main functionality to be imported and used in other parts of the codebase.

The `__init__.py` file is responsible for importing the necessary modules and setting up the context for the Weave project. It imports the `context_state` module for managing the state of the context and the `logging` module for logging error messages. It also sets a flag to load built-in modules and imports the `lc` module, which contains the main functionality for the project.

```python
from weave import lc

# Use the functionality provided by the lc module
lc.do_something()
```

The `lc.py` file defines various classes, types, and operations related to language models, embeddings, and document retrieval. It provides a flexible framework for working with language models, embeddings, and document retrieval in the Weave project. Users can create instances of different language models, chains, and vector stores, and perform operations such as predicting text and running chains with queries.

```python
from weave import lc

# Create an instance of a language model
model = lc.openai()

# Predict text using the model
prediction = model.predict("What is the capital of France?")
```

The `util.py` file contains common utilities for the LangChain integration, primarily used by the `WandbTracer` to extract and save relevant information. It provides a function, `safely_convert_lc_run_to_wb_span`, which converts a LangChain Run into a W&B Trace Span. This function is useful for extracting and saving information from LangChain Runs.

```python
from weave import safely_convert_lc_run_to_wb_span
from langchain.callbacks.tracers.schemas import Run

run = Run(...)
span = safely_convert_lc_run_to_wb_span(run)
```

In summary, the `langchain` folder in the Weave project provides a comprehensive framework for working with language models, embeddings, and document retrieval. It sets up the context for the project, defines various classes and operations for language models and embeddings, and provides utility functions for extracting and saving information from LangChain Runs. This code can be used in conjunction with other parts of the Weave project to create and manipulate language models, chains, and vector stores, as well as perform operations such as predicting text and running chains with queries.
