# NodeJs #
Prerequiste: Install **node.js** [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Create a new project folder **hello-world**
```
mkdir hello-world && cd hello-world
```

Initiate a new Node application. Run this under the project folder
```
npm init
```

Go through all the steps mentioned. This should create a *package.json* file. The file should look like this.

```
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Create an *index.js* file and open it to edit
```
touch index.js && nano index.js
```

Add the following code in the file *hello-world/index.js*

```
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run the application, use the following command
```
node index.js
```

open [http://localhost:3000](http://localhost:3000) in a browser to see the words Hello World.

***************************************************************************************************************
To install a new package for this project
```
npm install package
```

To install a new package and save an entry in dependencies in package.json file.
```
npm install package -- save
```

To install the a new package globally allows to use every where
```
npm install -g package
```

To list all the installed package globally
```
npm list -g --depth=0
```

> * list -g: display a tree of every package found in the user’s folders (without the -g option it only shows the current directory’s packages)
> * depth 0 / — depth=0: avoid including every package’s dependencies in the tree view

## Popular NPM Packages ##
* Typescript:
```
npm install typescript
```
* Express:
```
npm install Express
```





