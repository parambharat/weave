[View code on GitHub](https://github.com/wandb/weave/weave/panels/panel_query.py)

The `weave.query` module contains the `Query` class, which is a subclass of `panel.Panel`. The purpose of this class is to provide a way to filter and manipulate data in a table. 

The `Query` class has a `config` attribute, which is an instance of the `QueryConfig` class. This class contains information about the table being queried, such as the table state, dimensions, conditions, and pinned rows. 

The `Query` class has two methods: `selected_refine` and `selected`. The `selected_refine` method returns the type of the input node, while the `selected` method applies filters to the input node based on the conditions specified in the `QueryConfig` object. 

The `Query` class can be used in the larger project to provide a way for users to filter and manipulate data in a table. For example, a user could create a `Query` object and specify conditions for filtering the data, such as filtering by a certain column or value. The `selected` method could then be called to apply these filters to the data and return the filtered data. 

Example usage:

```
import weave.query

# create a Query object
query = weave.query.Query(input_node=my_input_node, vars=my_vars, config=my_config)

# specify conditions for filtering the data
query.config.conditions = [
    weave.query.QueryCondition(
        expression=my_expression,
        editor=my_editor
    )
]

# apply filters to the data and return the filtered data
filtered_data = query.selected()
```
## Questions: 
 1. What is the purpose of the `Query` class and how is it used?
    - The `Query` class is a subclass of `panel.Panel` and represents a query panel. It takes an input node, variables, and configuration options as arguments and can be used to apply filters to the input data and display the results in a table.
2. What is the `QueryCondition` class and how is it used in the `QueryConfig` class?
    - The `QueryCondition` class represents a condition that can be applied to the query. It has an `expression` attribute that is a `weave.Node` representing the condition expression, and an `editor` attribute that is a `graph.VoidNode`. It is used in the `QueryConfig` class as a list of conditions that can be applied to the query.
3. What is the purpose of the `selected` method and how does it work?
    - The `selected` method is a weave operation that applies filters to the input data based on the conditions specified in the `QueryConfig` and returns the filtered data as a `weave.Node`. It first checks if there are any pre-filter functions specified in the `QueryConfig` and applies them if they exist. It then returns the filtered data using the `weave_internal.use` function.