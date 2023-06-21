[View code on GitHub](https://github.com/wandb/weave/weave/ecosystem/langchain/util.py)

This file contains common utilities for the LangChain integration. It exposes 3 primary functions that are used by the `WandbTracer` to extract and save relevant information. 

The first function, `safely_convert_lc_run_to_wb_span`, converts a LangChain Run into a W&B Trace Span. It takes a `Run` object as input and returns a `trace_tree.Span` object. If the conversion fails, it returns `None`. 

The second function, `safely_get_span_producing_model`, retrieves the model that produced a given LangChain Run. However, this function is currently commented out and not in use. 

The third function, `safely_convert_model_to_dict`, converts a LangChain model into a dictionary. This function is also commented out and not in use. 

The `safely_convert_lc_run_to_wb_span` function calls the `_convert_lc_run_to_wb_span` function, which is a private function that converts a LangChain Run into a W&B Trace Span. Depending on the type of the Run, it calls one of four private conversion functions: `_convert_llm_run_to_wb_span`, `_convert_chain_run_to_wb_span`, `_convert_tool_run_to_wb_span`, or `_convert_unknown_run_to_wb_span`. These functions convert the Run into a Trace Span with different attributes depending on the type of Run. 

The `safely_convert_lc_run_to_wb_span` function catches any exceptions that occur during the conversion process and returns `None` if an exception is caught. 

Overall, this file provides utility functions for converting LangChain Runs into W&B Trace Spans, which are used to extract and save relevant information. 

Example usage:

```
from weave import safely_convert_lc_run_to_wb_span
from langchain.callbacks.tracers.schemas import Run

run = Run(...)
span = safely_convert_lc_run_to_wb_span(run)
```
## Questions: 
 1. What are the primary functions exposed by this file?
- The file exposes 4 primary functions: `safely_convert_lc_run_to_wb_span`, `safely_get_span_producing_model`, `safely_convert_model_to_dict`, and `_convert_lc_run_to_wb_span`.
2. What is the purpose of the `safely_convert_lc_run_to_wb_span` function?
- The `safely_convert_lc_run_to_wb_span` function converts a LangChain Run into a W&B Trace Span, and returns `None` if the conversion fails.
3. What is the purpose of the `_replace_type_with_kind` function?
- The `_replace_type_with_kind` function replaces the `_type` key in a dictionary with `_kind`, since `_type` is a special key in W&B. It recursively applies this replacement to all nested dictionaries, lists, tuples, and sets. However, this function is not currently being used in the code.