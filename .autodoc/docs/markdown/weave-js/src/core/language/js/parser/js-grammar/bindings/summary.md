[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/core/language/js/parser/js-grammar/bindings)

The `bindings` folder in the `weave-js/src/core/language/js/parser/js-grammar` directory contains language bindings for the Weave programming language, enabling the Tree-sitter parsing library to parse and analyze Weave source code. Tree-sitter is a parsing library that generates abstract syntax trees (ASTs) for source code, which can be used for various purposes such as syntax highlighting, code completion, and refactoring.

The `bindings` folder has two subfolders: `node` and `rust`. Each subfolder provides language bindings for different programming languages.

### Node

The `node` subfolder contains the `binding.cc` file, which defines a function called `tree_sitter_weave()` that returns a pointer to a `TSLanguage` struct, containing information about the syntax of the Weave programming language. The `Init()` function initializes the language binding by creating a new `FunctionTemplate` object, defining a constructor function for the language binding, and creating a new instance of the `Language` class, which is a wrapper around the `TSLanguage` struct.

Example usage:

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

The `index.js` file exports a Node.js module called `tree_sitter_weave_binding` and a JSON file called `node-types.json`. The `tree_sitter_weave_binding` module is a native addon that provides a C++ binding for the Tree-sitter parsing library. The `node-types.json` file contains information about the syntax tree nodes produced by the parser.

Example usage:

```javascript
const parser = require('weave').parser;
const sourceCode = '...'; // some `weave` source code
const tree = parser.parse(sourceCode);

// Traverse the syntax tree and do something with each node
tree.walk((node) => {
  if (node.type === 'function_declaration') {
    console.log(`Found function: ${node.name}`);
  }
});
```

### Rust

The `rust` subfolder contains the `lib.rs` file, which provides support for the Weave language in the Tree-sitter parsing library. The primary function in this file is `language()`, which returns the Tree-sitter `Language` for the Weave grammar.

Example usage:

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

The `NODE_TYPES` constant provides the content of the `node-types.json` file for this grammar. The `tests` module includes a single test that verifies that the Weave language can be loaded by a Tree-sitter parser.

In summary, the `bindings` folder provides the necessary support for parsing code written in the Weave language using the Tree-sitter parsing library. This support enables developers to analyze and manipulate Weave code in a structured manner, making it easier to work with the Weave language in the larger project.
