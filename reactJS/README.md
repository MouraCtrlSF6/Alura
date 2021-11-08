<h1 align="center">👨‍💻 Studing REACT 👨‍💻</h1>
<h4 align="center"> Learning from ALURA </h4>

## Start new react application

Install React and it's dependencies, create node_modules,
public and src folders with it's repectives files

```sh 
npx create-react-app <app_name>
```

## Run app

```sh 
yarn start
```
OR
```sh 
npm start
```

### Procedures

- [x] Remove all files form src folder, except for App.js, index.css and index.js
- [x] Create a new folder called components

#### Notes

For every new React component, <b>import React from 'react'</b> necessary, as
well as export it after creation. After that, the App file is ment to import 
the required components. It references the components and returns them as JSX elements.
The App file itself is a React component, which is being imported and used on 
index.js file. The index.js file is supposed to get an element who's id is 'root', by default,
from the DOM, placed on public/index.html.
