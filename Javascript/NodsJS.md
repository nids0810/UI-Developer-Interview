# NodeJs #

## Build first node.js project ##
*Prerequisite* Install **node.js** [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

1. Create a new project folder **hello-world**
```
mkdir hello-world && cd hello-world
```

2. Initiate a new Node application. Run this under the project folder
```
npm init
```

3. Go through all the steps mentioned. This should create a *package.json* file. The file should look like this.

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

4. Create an *index.js* file and open it to edit
```
touch index.js && nano index.js
```

5. Add the following code in the file *hello-world/index.js*

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

6. Run the application using the following command
```
node index.js
```

7. open [http://localhost:3000](http://localhost:3000) in a browser to see the words Hello World.

***************************************************************************************************************
## Popular NPM Packages ##
* Typescript:
```
npm install typescript
```
* Express:
```
npm install Express
```
* body-parser: body-parser parses incoming request bodies in a middleware before your handlers, available under the req.bodyproperty
```
npm install body-parser --save
```

* Nodeman: Nodemon watches your app for file changes and restarts the server every time a file changes in your app. This eases your work because you won’t have to start and restart the server manually every time you change files in your app
```
npm install nodemon --save-dev
```
* Babel: Babel helps to turn our codes from ES6 to ES5.
```
npm install babel-cli --save
```
>> To configure Babel for the project, create a new file called .babelrc in the app root using `$ touch .babelrc` and update the following content in the file
```
{
  "presets": ["es2015"]
}
```

* Sequelize: Sequelize is an ORM for Nodejs, it supports PostgreSQL, MySQL, SQLite and MSSQL
```
npm install -save sequelize-cli
```
>> To configure Sequelize for the project, create a new file called .sequelizerc in the app root using `$ touch .babelrc` and update the following content in the file.
```
const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models": path.resolve('./server/models'),
  "migrations": path.resolve('./server/migrations')
};
```
***************************************************************************************************************
## Popular FAQs ##
* To install a new package for a particular project (run under the project folder)
```
npm install package
```

* To install a new package and save an entry in dependencies in package.json file.
```
npm install package -- save
```

* To install the a new package globally allows to use every where
```
npm install -g package
```

* To list all the installed package globally
```
npm list -g --depth=0
```

> * list -g: display a tree of every package found in the user’s folders (without the -g option it only shows the current directory’s packages)
> * depth 0 / — depth=0: avoid including every package’s dependencies in the tree view

* To use a class defined in an external js file e.g: *example.js* under the *main.js* file
*example.js*
```
class Example {
  constructor(){
    /* some code*/
  }
}

module.export.Example Example
```
*main.js*
```
import { Example} from './example';
```
* To always run the node application with specific parameters
Add following the in package.json file
```
"start": "nodemon app.js --exec babel-node --"
```
Use the following command to start node app
```
npm run start
```


