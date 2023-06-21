[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/language/js/parser/js-grammar)

The `js-grammar` folder in the Weave project contains the core grammar and language bindings for parsing and analyzing JavaScript code using the Tree-sitter library. The main file, `grammar.js`, defines the grammar rules for the Weave language, which are used to build an Abstract Syntax Tree (AST) from the source code. The grammar is organized into sections such as Export and Import declarations, Statements, Expressions, Primitives, and Expression components.

For example, given the following Weave code snippet:

```weave
import { foo } from './module';
export const bar = foo + 1;
```

The grammar would parse this code into an AST with nodes representing the import statement, export statement, and the various expressions and identifiers used in the code. This AST can then be used for further analysis, transformation, or code generation.

The `bindings` folder provides language bindings for different programming languages, such as Node.js and Rust, enabling the Tree-sitter parsing library to parse and analyze Weave source code. The Node.js bindings can be used as follows:

```javascript
const Parser = require("tree-sitter");
const Weave = require("./weave");

const parser = new Parser();
parser.setLanguage(Weave);

const sourceCode = `
  function add(a, b) {
    return a + b;
  }
`;

const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());
```

The Rust bindings can be used like this:

```rust
use tree_sitter::Parser;
use tree_sitter_weave;

fn main() {
    let mut parser = Parser::new();
    parser.set_language(tree_sitter_weave::language()).unwrap();
    let code = "some Weave code";
    let tree = parser.parse(code, None).unwrap();
    println!("{:?}", tree.root_node());
}
```

The `src` folder contains the `scanner.c` file, which provides an external scanner for parsing and manipulating JavaScript code. This scanner extends the functionality of the default scanner provided by the Tree-sitter library by recognizing certain types of tokens that are not handled by the default scanner, such as automatically inserted semicolons, template literals, and ternary operators.

In summary, the `js-grammar` folder plays a vital role in the Weave project by providing the core grammar and language bindings for parsing and analyzing JavaScript code using the Tree-sitter library. This enhanced parsing capability can be utilized for various purposes, such as syntax highlighting, code analysis, and code transformation.
