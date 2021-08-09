📦 Reactjs Modele
=================
This is my Reactjs modele for 2021 using Webpack 5 and Babel 6.

- [First step](#firststep)
- [How to start a project](#start)
- [Project build](#build)
- [Utilities](#utilities)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

<a id="firststep"></a>First Step
================================
If you want to test this modele and to expect it:
```sh
# Clone the project and go in it
git clone git@github.com:fguiliana/react-js-modele.git
cd react-js-modele
# Install dependencies
yarn
# Run the development server
yarn start
# Go to http://localhost:8080/
```

<a id="start"></a>How to start a project
========================================
If you want to use this modele for your project, you just need to follow these steps.
Don't forget to clone the modele as explained in the [first step](#firststep) next to you project repository.
```sh
# Go into your own project repository
cd path/to/my-project
# Copy visible and hidden files from the modele into you own proejct
# NB: you could have some alerts regarding ignored folders, this is normal.
cp -n ../react-js-modele/{.*,*} .
# Recursive copy of src/, config/, public/ forlders
# NB: you could have some alerts regarding ignored folders, this is normal.
cp -rn ../react-js-modele/{src,config,public} .
# Install dependencies
yarn
# Run the development server
yarn start
# Go to http://localhost:8080/
```

<a id="build"></a>Project build
===============================
Webpack can produce the concrete project version in a a folder named `dist/` using the command `yarn build`.\
`build` is for building the ready-for-production project (ready to be hosted).

- Compiling files
- Files copy
- Code cleaning
- Code minification
- ...

```sh
# Go into your repository
cd my-project
# Production build : gathering and optimizing files
yarn build
```

<a id="utilities"></a>Utilities
===============================
Work in progress

<a id="dependencies"></a>Dependencies
===============================
Work in progress

<a id="scripts"></a>Scripts
===============================
Work in progress
