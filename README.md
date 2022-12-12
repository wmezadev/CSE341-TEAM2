# CSE 341 Team Project

This project is a app api for BYU Idaho CSE 341 course. You can check the [project requriments here](./docs/PROJECTREQ.md)

## Application Stack

- ExpressJS (js web server)
- TypeScript (js superset to enable types)
- Mongoose (nosql database)
- Prettier (formatting)
- ESLint (linting)
- Swagger (api doc)
- Yarn (package manager)

## Getting started

Because this project uses typescript you need compile from `.ts` files to `.js` file before running the project. When you build using any of the defined scripts: `build`, `start`, or `start:dev` a new directory named `dist/` is going to be created. That directory will contain all the compiled javascript files for node runner.

### Install dependencies

You need to install yarn globally before running the app. Run `yarn install` to install all js dependencies (node_modules). Before first use, you might need to run `yarn build`. You can use npm commands as well `npm run <script>`. But you should mantain package-lock.json and yarn.lock file by running `npm i <package_name>` and `yarn add <package_name>` every time you want to install a new dependency.

### Enviroment file

You need to create a new file called `.env`, this file is not going to be tracked by git because security purposes. Use this example with your own values:

```
APP_PORT=8080
APP_HOST=localhost
APP_HTTP_SCHEMA=http
MONGODB_URI=mongodb+srv://user:buoOJyajxvZTACPp@cluster0.host.mongodb.net
```

### Development

Run `yarn start:dev` or (`npm run start:dev` when using npm), nodemoon will be watching any file change.

### Production

The dist directory contains the production files, you need to build before by using `yarn build`, then you can run `yarn start`. Or go to dist directory and run `node index.js`.

## Collaborators

- [@wmezadev](https://github.com/wmezadev/)
- [@sbunkerchris](https://github.com/sbunkerchris)
- [@ojorojustice](https://github.com/ojorojustice)
