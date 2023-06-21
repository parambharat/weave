[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave/ecosystem/bertviz)

The `bertviz` folder in the `weave` project provides functionality for visualizing attention matrices in BERT models using the `bertviz` library. It contains two main components: the `head_view` function and the `BertvizHeadView` class, as well as the `model_view` function and the `BertvizModelView` class.

The `head_view` function takes a `huggingface.ModelOutputAttention` object as input and returns an HTML string that can be used to visualize the attention matrix for a single head in the BERT model. The `BertvizHeadView` class is a `weave.Panel` subclass that provides a UI component for visualizing the attention matrix for a single head, using the `head_view` function.

The `model_view` function is similar to `head_view`, but instead of visualizing a single head, it visualizes the full matrix of attention heads as rows and layers as columns for each attention map. The `BertvizModelView` class is similar to `BertvizHeadView`, but provides a UI component for visualizing the full attention matrix, using the `model_view` function.

Here is an example of how this code might be used:

```python
import transformers
from weave import Weave
from weave.contrib.huggingface import HuggingFaceModelOutputAttention

model = transformers.BertModel.from_pretrained('bert-base-uncased')
tokenizer = transformers.BertTokenizer.from_pretrained('bert-base-uncased')

inputs = tokenizer.encode_plus('Hello, world!', return_tensors='pt')
outputs = model(**inputs)

attention = HuggingFaceModelOutputAttention(outputs)

head_view_panel = BertvizHeadView(input_node=attention).render()
model_view_panel = BertvizModelView(input_node=attention).model_view_panel_render()

weave = Weave([head_view_panel, model_view_panel])
weave.show()
```

In this example, a BERT model and tokenizer are loaded from the `transformers` library. The input text "Hello, world!" is tokenized and passed through the model to obtain the attention matrices. The `HuggingFaceModelOutputAttention` class is used to wrap the attention matrices, which are then passed to the `BertvizHeadView` and `BertvizModelView` classes to create the visualization panels. Finally, the panels are added to a `Weave` instance and displayed.

Overall, the `bertviz` folder in the `weave` project provides a convenient way to visualize attention matrices in BERT models using the `bertviz` library within the larger `weave` project. This can be useful for developers who want to better understand the inner workings of BERT models and how they process input text.
