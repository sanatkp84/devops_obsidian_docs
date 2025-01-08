- Javascript Runtime Environment
- It is used for *server* side programming
- *Nodejs is not a language, library or framework*

- It can run the code outside of the browser. (JS can run the code only in the browser because browsers have interpreter to run js code.) That's why Nodejs came in to market in 2009.

- To enter in to Node REPL we can just type `node`& then we can run javascript commands in it.

- In the node REPL we can run a javascript file using `node` command.
- Suppose `script.js` is the file name, then the command will be `node script.js`.

# Process

- Process: This object provides information about, and control over, the current Node.js process.
- process.argv : returns an array containing the command-line arrguments passed when the Node.js process was launched.

# module.exports

- require() : a built-in function to include external modules that exist in separate files.
- module.exports : a special object

# NPM (Node Package Manager)

-  npm is the standard package manager for Node.js .
1. Library of packages
2. Command Line Tool

# Installing Packages

*node_modules* : The node_modules folder contains every installed dependency for your project

*package-lock.json* : It records the exact version of every installed depedency, including its sub-dependencies and their versions.

# require v/s import

- `import {sum} from "./math.js"`
- We can't selevtively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
- Loading is synchronous for "require" but can be asynchronous for "import".