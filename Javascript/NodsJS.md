
https://codeburst.io/node-js-by-example-part-1-668376cd4f96

It will install the npm package and allows to use globally.
`npm install -g`

Initiate a new Node application. Run this under an empty folder. 

`npm init`

This should create a `package.json` file. The file should look like this.

```{
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

Create an `index.js` file, and add the following code

`hello-world/index.js`

```const http = require('http');
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
`node index.js`

open [http://localhost:3000](http://localhost:3000) in a browser to see the words Hello World.

To install the corresponding package and save it in node modules and list an entry in dependencies in package.jason file.
`npm install package -- save`




















Commands
* npm install
* npm install grunt
* bower install
* grunt buildprod
* grunt builddev

*During the installation of bower, may show the error unable to connect to GitHub. Enter the cmd bower install again in same command prompt.

