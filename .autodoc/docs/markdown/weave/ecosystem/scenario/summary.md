[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave/ecosystem/scenario)

The `scenario` folder contains code for the `MetricsBankPanel` class, which is responsible for rendering a panel that displays and compares metrics from two sets of `ScenarioResult` objects, referred to as `baseline` and `candidate`. This panel is part of the larger `weave` project, which is a framework for creating interactive data visualizations.

The `MetricsBankPanel` class is a subclass of `weave.Panel` and has an `input_node` attribute of type `weave.Node[MetricsBankInput]`. The `MetricsBankInput` class is a TypedDict with two attributes, `baseline` and `candidate`, both of which are lists of `ScenarioResult` objects. Each `ScenarioResult` object contains a `scenario_id` attribute and six `metric` attributes, all of which are floats.

The main functionality of the `MetricsBankPanel` class is provided by its `render` method, which is decorated with `weave.op()`. This method takes no arguments and returns a `weave.panels.Each` object. Inside the `render` method, the `input_node` attribute is cast to type `MetricsBankInput`, and the `baseline` and `candidate` attributes are extracted. The `weave.ops.join_all()` method is then called to join the `baseline` and `candidate` lists based on the `scenario_id` attribute.

The `weave.ops.difference()` method is used to obtain a list of metric names, excluding the `scenario_id`. A `weave.panels.Each` object is then returned, which iterates over the metric names and creates a `weave.panels.Group` object for each metric. Each `Group` object contains a `weave.panels.Plot` object that plots the values of the metric for the baseline and candidate dictionaries.

Here's an example of how this code might be used:

```python
from weave import Weave
from .autodoc.docs.json.weave.ecosystem.scenario import MetricsBankPanel, MetricsBankInput, ScenarioResult

# Create sample ScenarioResult objects
baseline_results = [
    ScenarioResult(scenario_id="1", metric1=10, metric2=20, metric3=30, metric4=40, metric5=50, metric6=60),
    ScenarioResult(scenario_id="2", metric1=15, metric2=25, metric3=35, metric4=45, metric5=55, metric6=65),
]

candidate_results = [
    ScenarioResult(scenario_id="1", metric1=12, metric2=22, metric3=32, metric4=42, metric5=52, metric6=62),
    ScenarioResult(scenario_id="2", metric1=18, metric2=28, metric3=38, metric4=48, metric5=58, metric6=68),
]

# Create MetricsBankInput object
input_data = MetricsBankInput(baseline=baseline_results, candidate=candidate_results)

# Create MetricsBankPanel object
metrics_panel = MetricsBankPanel(input_node=input_data)

# Render the panel using Weave
weave = Weave(metrics_panel)
weave.render()
```

This example creates two sets of `ScenarioResult` objects, one for the baseline and one for the candidate. It then creates a `MetricsBankInput` object and passes it to the `MetricsBankPanel` class. Finally, it renders the panel using the `Weave` framework, which will display a comparison of the metrics for each scenario in the baseline and candidate sets.
