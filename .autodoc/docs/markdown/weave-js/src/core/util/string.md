[View code on GitHub](https://github.com/wandb/weave/weave-js/src/core/util/string.ts)

The `weave` project contains a file with several utility functions that can be used throughout the project. 

The `splitOnce` function takes in a string and a delimiter and returns an array with two elements. The first element is the substring before the first occurrence of the delimiter, and the second element is the substring after the delimiter. If the delimiter is not present in the string, the second element of the array is null. This function can be used to split a string into two parts based on a specific character or substring.

The `splitOnceLast` function is similar to `splitOnce`, but it splits the string on the last occurrence of the delimiter instead of the first. If the delimiter is not present in the string, the function returns an array with two null values.

The `stripQuotesAndSpace` function takes in a string and removes any leading or trailing spaces or quotes. This function can be used to clean up user input or data from an external source.

The `sanitizeGQLAlias` function takes in a string and replaces any non-letter, non-number, or non-underscore characters with double underscores. This function is specifically designed to sanitize strings that will be used as aliases in GraphQL queries, as the GraphQL spec only allows letters, numbers, and underscores in aliases.

The `capitalizeFirst` function takes in a string and returns the same string with the first letter capitalized. This function can be used to format strings in a consistent way.

The `isValidEmail` function takes in a string and returns true if the string matches the pattern of a valid email address. This function can be used to validate user input or data from an external source.

The `removeNonASCII` function takes in a string and removes any non-ASCII characters. This function can be used to clean up user input or data from an external source.

The `indent` function takes in a string and a number representing the indentation level, and returns the same string with the specified number of spaces added to the beginning of each line. This function can be used to format strings in a consistent way, such as when printing debug information or generating code. 

Overall, these utility functions provide a set of tools that can be used throughout the `weave` project to manipulate and format strings in various ways.
## Questions: 
 1. What is the purpose of the `weave` project?
- Unfortunately, the code provided does not give any indication of the purpose of the `weave` project. Further information would be needed to answer this question.

2. What is the expected input and output of the `splitOnce` and `splitOnceLast` functions?
- Both `splitOnce` and `splitOnceLast` take in a string and a delimiter as arguments, and return an array of two strings. `splitOnce` splits the input string on the first occurrence of the delimiter, while `splitOnceLast` splits the input string on the last occurrence of the delimiter.

3. What is the purpose of the `sanitizeGQLAlias` function?
- The `sanitizeGQLAlias` function replaces all non-letter, non-number, and non-underscore characters in a string with double underscores. This is done to ensure that the resulting string conforms to the GraphQL specification for naming conventions.