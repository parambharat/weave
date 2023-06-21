[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave/ecosystem/spacy)

The code in the `spacy.py` file defines custom types, operations, and a panel for working with `spacy.tokens.doc.Doc` objects in the `weave` project. The `SpacyDocType` class allows these objects to be saved and loaded as artifacts, while the `spacy`, `spacy_doc_dep_to_html`, and `spacy_doc_ent_to_html` operations provide functionality for generating visualizations of these objects. The `SpacyDocPanel` class provides a convenient way to view these visualizations in a single panel.

For example, in a natural language processing (NLP) application that uses the `spacy` module to analyze text, the following code snippet demonstrates how to use the custom `SpacyDocType` class and the `spacy` operation:

```python
from weave.ecosystem.spacy import SpacyDocType, spacy

text = "This is an example sentence."
doc = spacy(text)
doc_type = SpacyDocType()
doc_type.save_instance(doc, "example_artifact", "example_name")
loaded_doc = doc_type.load_instance("example_artifact", "example_name")
```

The `spacy_doc_dep_to_html` and `spacy_doc_ent_to_html` operations can be used to generate HTML visualizations of the dependency parse and named entities, respectively. Here's an example of how to use these operations:

```python
from weave.ecosystem.spacy import spacy_doc_dep_to_html, spacy_doc_ent_to_html

dep_html = spacy_doc_dep_to_html(doc)
ent_html = spacy_doc_ent_to_html(doc)
```

The `SpacyDocPanel` class provides a custom panel for visualizing `spacy.tokens.doc.Doc` objects. It can be used as follows:

```python
from weave.ecosystem.spacy import SpacyDocPanel

panel = SpacyDocPanel(doc)
```

In the `__init__.py` file, the code ensures that the built-in modules are not loaded during the import process of the `spacy` module. This is important because it can prevent conflicts with other modules that may be using the same built-in modules. The code imports the `context_state` module from the `weave` project and sets a variable `_loading_builtins_token` to the result of calling the `set_loading_built_ins()` method from the `context_state` module. Then, it imports the `spacy` module from the current directory using a relative import. Finally, the code calls the `clear_loading_built_ins()` method from the `context_state` module with the `_loading_builtins_token` variable as an argument. This method clears the built-in modules that were loaded during the import of the `spacy` module, allowing for a clean import of the module.
