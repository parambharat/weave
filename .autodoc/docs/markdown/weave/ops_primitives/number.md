[View code on GitHub](https://github.com/wandb/weave/weave/ops_primitives/number.py)

The `weave` module contains a collection of operations and classes related to numerical computations. The `Number` class is a custom implementation of a number type that supports various mathematical operations such as addition, subtraction, multiplication, division, and more. Each operation is implemented as a method of the `Number` class and is decorated with the `op` decorator, which specifies the name of the operation, the input and output types, and any additional metadata.

For example, the `__add__` method is decorated with `op(name="number-add", input_type=binary_number_op_input_type, output_type=types.Number())`, which means that it is the implementation of the "number-add" operation, takes two arguments of type `Number`, and returns a `Number`. The `__add__` method checks if either of the operands is `None` and returns `None` if so. Otherwise, it performs the addition and returns the result.

The `weave` module also provides a set of operations for working with lists of numbers, such as `numbers_sum`, `numbers_avg`, `numbers_min`, `numbers_max`, `numbers_argmax`, `numbers_argmin`, and `stddev`. These operations take a list of numbers as input and return a single number or `None` depending on the operation. For example, `numbers_sum` returns the sum of the numbers in the list, while `numbers_avg` returns the average.

Finally, the `weave` module provides two operations for generating random numbers drawn from a univariate Gaussian distribution: `random_normal_single` and `random_normal`. The former generates a single random number, while the latter generates a list of random numbers. Both operations take the mean and standard deviation of the distribution as input.

Overall, the `weave` module provides a set of operations and classes for performing numerical computations and working with lists of numbers. These operations can be used in larger projects that require numerical computations, such as data analysis or machine learning.
## Questions: 
 1. What is the purpose of the `weave_class` decorator on the `Number` class?
- The `weave_class` decorator is used to indicate that the `Number` class is a Weave class, and specifies the Weave type for instances of the class.

2. What is the purpose of the `numbers_ops_output_type` function?
- The `numbers_ops_output_type` function is used to determine the output type of operations that take a list of numbers as input. It returns the type of the numbers in the list if they are all of the same type, or `NoneType` if the list contains any `None` values.

3. What is the purpose of the `random_normal` function?
- The `random_normal` function generates a list of random numbers drawn from a univariate Gaussian distribution with a specified mean and standard deviation.