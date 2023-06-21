[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave/ecosystem/pytorch)

The code in the `weave/ecosystem/pytorch` folder provides custom types for handling PyTorch objects, specifically `torch.Tensor` and `torch.nn.Sequential` objects, within the `weave` project. These custom types, `TorchTensorType` and `TorchModelType`, inherit from the base class `weave.types.Type` and are used to save and load instances of the respective PyTorch objects to and from a `weave.Artifact`.

The `TorchTensorType` class handles `torch.Tensor` objects, defining class variables `instance_classes` and `instance_class` as `torch.Tensor`. It also provides `save_instance` and `load_instance` methods for saving and loading `torch.Tensor` objects to and from an artifact. Similarly, the `TorchModelType` class handles `torch.nn.Sequential` objects, with the same class variables and methods as `TorchTensorType`, but for `torch.nn.Sequential` objects.

These custom types can be used with the `weave.Artifact` class to save and load PyTorch objects. For example, to save a `torch.Tensor` object to an artifact, you can use the following code:

```python
import weave
import torch

artifact = weave.Artifact("my_artifact")
tensor = torch.tensor([1, 2, 3])
artifact.save(tensor, "my_tensor", type=TorchTensorType())
```

This saves the `tensor` object to a file named `my_tensor.pt` in the artifact, using the `TorchTensorType`. To load the object back from the artifact, you can use the following code:

```python
import weave
import torch

artifact = weave.Artifact("my_artifact")
tensor = artifact.load("my_tensor", type=TorchTensorType())
```

This loads the `tensor` object from the artifact, using the `TorchTensorType`. Similarly, you can save and load `torch.nn.Sequential` objects using the `TorchModelType`.

By providing custom types for handling PyTorch objects, this code allows developers to easily integrate PyTorch models and tensors into the `weave` project, enabling seamless interaction between the `weave` ecosystem and PyTorch-based machine learning models.
