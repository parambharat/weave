[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/Panel2/PanelFileText/common.ts)

This file contains several constants and a function that are used in the larger weave project. The `EXTENSION_INFO` constant is an object that maps file extensions to their corresponding types. For example, the extension `.md` is mapped to the type `markdown`. This constant is used throughout the project to determine the type of a file based on its extension.

The `inputType` constant is an object that describes the expected input for a function in the project. It is a union type that includes all of the file extensions in `EXTENSION_INFO`. This constant is used to validate input to the function and ensure that it is a valid file type.

The `processTextForDisplay` function takes in a file extension, some text, and two limits (one for line length and one for total lines) and processes the text for display. It first splits the text into an array of lines and then performs some additional processing based on the file extension. For example, if the file extension is `.json` and the text is a single line, it attempts to parse the JSON and pretty-print it. If the file extension is `.ipynb`, it attempts to parse the text as JSON and extract the source code from the notebook cells.

After any additional processing, the function truncates lines that are too long and limits the total number of lines based on the provided limits. It then returns an object that includes the processed text, as well as flags indicating whether any lines or the total number of lines were truncated.

Overall, this file provides some useful constants and a function that are used throughout the larger weave project to handle file types and process text for display. Here is an example of how the `EXTENSION_INFO` constant might be used in another file:

```
import { EXTENSION_INFO } from 'weave';

const fileType = EXTENSION_INFO['.md']; // 'markdown'
```
## Questions: 
 1. What is the purpose of the `EXTENSION_INFO` object?
   - The `EXTENSION_INFO` object maps file extensions to their corresponding types (e.g. 'json' maps to 'json'). 

2. What is the `inputType` object used for?
   - The `inputType` object is used to define a union type for file inputs, where each member is a file with a specific extension defined in `EXTENSION_INFO`.

3. What does the `processTextForDisplay` function do?
   - The `processTextForDisplay` function takes in a file extension, text content, and limits for line length and total lines, and returns an object with the processed text, as well as flags indicating whether any lines or the total number of lines were truncated. It also includes special handling for JSON and IPython Notebook files.