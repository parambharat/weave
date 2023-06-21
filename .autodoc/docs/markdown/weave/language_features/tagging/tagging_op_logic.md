[View code on GitHub](https://github.com/wandb/weave/weave/language_features/tagging/tagging_op_logic.py)

This code defines three functions related to the handling of tagged values in the larger project called "weave". 

The first function, `op_get_tag_type_resolver`, takes in a `types.Type` object and returns the tag associated with it if it is a `TaggedValueType` or a `Const` object with a `TaggedValueType` value type. Otherwise, it returns `NoneType()`. This function is useful for retrieving the tag associated with a tagged value type, which can be used for further processing or validation.

Here is an example usage of `op_get_tag_type_resolver`:

```
from weave.tagged_value_type import TaggedValueType
from weave import weave_types as types

# create a tagged value type with tag "my_tag"
my_tagged_value = TaggedValueType(types.Int(), "my_tag")

# get the tag associated with the tagged value type
tag = op_get_tag_type_resolver(my_tagged_value)  # returns "my_tag"
```

The second function, `op_make_type_tagged_resolver`, takes in a `types.Type` object and a `tag_type` object and returns a new `TaggedValueType` object with the given `tag_type` and the original `obj_type`. If `tag_type` is a `TypedDict`, the resulting `TaggedValueType` will have the `TypedDict` as its tag. This function is useful for creating new tagged value types with a specific tag.

Here is an example usage of `op_make_type_tagged_resolver`:

```
from weave.tagged_value_type import TaggedValueType
from weave import weave_types as types

# create a tagged value type with tag "my_tag"
my_tagged_value = TaggedValueType(types.Int(), "my_tag")

# create a new tagged value type with tag "new_tag"
new_tagged_value = op_make_type_tagged_resolver(my_tagged_value, types.Str())  # returns TaggedValueType(types.Str(), my_tagged_value)
```

The third function, `op_make_type_key_tag_resolver`, takes in a `types.Type` object, a `key` string, and a `tag_type` object and returns a new `TaggedValueType` object with a `TypedDict` tag that includes the given `key` and `tag_type`. If `tag_type` is a `TaggedValueType` with a `TypedDict` tag, the resulting `TaggedValueType` will include all the properties of the original `TypedDict` tag in addition to the new `key` and `tag_type`. This function is useful for creating new tagged value types with a specific tag that includes additional properties.

Here is an example usage of `op_make_type_key_tag_resolver`:

```
from weave.tagged_value_type import TaggedValueType
from weave import weave_types as types

# create a tagged value type with tag {"my_key": types.Int()}
my_tagged_value = TaggedValueType(types.Int(), types.TypedDict({"my_key": types.Int()}))

# create a new tagged value type with tag {"my_key": types.Int(), "new_key": types.Str()}
new_tagged_value = op_make_type_key_tag_resolver(my_tagged_value, "new_key", types.Str())  # returns TaggedValueType(types.TypedDict({"my_key": types.Int(), "new_key": types.Str()}), my_tagged_value)
```

Overall, these functions provide useful tools for working with tagged value types in the larger "weave" project.
## Questions: 
 1. What is the purpose of the `weave_types` module that is imported?
- A smart developer might ask what types are defined in the `weave_types` module and how they are used in this code.

2. What is the expected input and output of the `op_get_tag_type_resolver` function?
- A smart developer might ask what types of objects can be passed as `obj_type` and what type is returned by the function.

3. What is the purpose of the `op_make_type_key_tag_resolver` function and how is it used?
- A smart developer might ask how the `key` parameter is used and what the resulting `TaggedValueType` object represents. They might also ask where this function is called in the project.