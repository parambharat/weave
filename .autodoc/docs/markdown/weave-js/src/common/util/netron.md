[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/util/netron.ts)

The `weave` project contains a file that exports an array of file extensions called `EXTENSIONS` and a function called `isViewable`. The purpose of this code is to register file extensions that can be viewed in the `weave` project and to check if a given file is viewable based on its extension.

The `register` function takes in two arguments: `id` and `extensions`. `id` is a string that represents the path to a module that can handle the given file extensions. `extensions` is an array of strings that represent file extensions. The function loops through each extension in the array and pushes it to the `EXTENSIONS` array.

The `isViewable` function takes in a string argument called `fname` which represents the name of a file. The function extracts the file extension from the `fname` argument and checks if it is included in the `EXTENSIONS` array using the `_.includes` method from the `lodash` library. If the extension is included in the array, the function returns `true`, indicating that the file is viewable. Otherwise, it returns `false`.

This code is used in the larger `weave` project to determine which files can be viewed in the application. For example, if a user uploads a file with a `.h5` extension, the `isViewable` function will return `true` because `.h5` is included in the `EXTENSIONS` array. This will allow the user to view the contents of the file in the `weave` application.

Code example:

```
import { isViewable } from 'weave';

const fileName = 'example.h5';
const isFileViewable = isViewable(fileName);

if (isFileViewable) {
  // display file contents in weave application
} else {
  // file is not viewable in weave application
}
```
## Questions: 
 1. What is the purpose of the `register` function?
    
    The `register` function is used to register file extensions with their corresponding module paths.

2. What is the purpose of the `EXTENSIONS` array?
    
    The `EXTENSIONS` array is used to store all the registered file extensions.

3. What is the purpose of the `isViewable` function?
    
    The `isViewable` function takes a filename as input and returns a boolean indicating whether the file is viewable based on its extension. It does this by checking if the extension of the filename is included in the `EXTENSIONS` array.