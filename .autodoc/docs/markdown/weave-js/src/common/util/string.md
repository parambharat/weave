[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/util/string.ts)

The `weave` project includes a file with various utility functions for string manipulation. These functions can be used throughout the project to perform common string operations.

The `splitOnce` function takes in a string and a delimiter and returns an array with two elements: the substring before the first occurrence of the delimiter and the substring after the delimiter. If the delimiter is not present in the string, the function returns an array with the original string and a null value. For example:

```
splitOnce('hello-world', '-') // returns ['hello', 'world']
splitOnce('hello', '-') // returns ['hello', null]
```

The `splitOnceLast` function is similar to `splitOnce`, but it returns the substring before the last occurrence of the delimiter and the substring after the last occurrence of the delimiter. If the delimiter is not present in the string, the function returns an array with two null values. For example:

```
splitOnceLast('hello-world', '-') // returns ['hello', 'world']
splitOnceLast('hello-world-hi', '-') // returns ['hello-world', 'hi']
splitOnceLast('hello', '-') // returns [null, null]
```

The `stripQuotesAndSpace` function takes in a string and removes any leading or trailing quotes or whitespace. If the input is not a string, the function returns the input unchanged.

The `sanitizeGQLAlias` function takes in a string and replaces any non-letter, non-number, or non-underscore characters with double underscores. This function is useful for ensuring that a string can be used as a valid GraphQL alias.

The `capitalizeFirst` function takes in a string and capitalizes the first letter while making the rest of the string lowercase.

The `isValidEmail` function takes in a string and returns true if the string matches the pattern of a valid email address.

The `removeNonASCII` function takes in a string and removes any non-ASCII characters.

The `indent` function takes in a string and a number representing the indentation level and returns the string with the specified number of spaces added to the beginning of each line.

The `applyPrefixIfNeeded` function takes in a prefix and a string and returns the string with the prefix added if it is not already present.

The `stripPrefixesIfNeeded` function takes in an array of prefixes and a string and returns the string with any of the specified prefixes removed from the beginning.

The `replaceDashWithSpace` function takes in a string and replaces any dashes with spaces.

Overall, these utility functions provide a convenient way to perform common string operations throughout the `weave` project.
## Questions: 
 1. What is the purpose of the `StringUtil` import from `lodash`?
- A smart developer might ask what specific utility functions from `StringUtil` are being used in this file.

2. What is the expected input and output of the `splitOnce` and `splitOnceLast` functions?
- A smart developer might ask for more information on the expected input and output types of the `splitOnce` and `splitOnceLast` functions, as well as how they differ from each other.

3. What is the purpose of the `sanitizeGQLAlias` function?
- A smart developer might ask why the `sanitizeGQLAlias` function is needed and how it is used in the larger project.