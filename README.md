# launchday-frontend :rocket:

## Introduction

The project uses the following technologies:

- [React](https://reactjs.org/docs/getting-started.html) for building dynamic JavaScript user interfaces.
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) for bootstrapping an application structure.
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for simple routing between pages.
- [Axios](https://github.com/axios/axios) for network requests and API simplification.
- [Ant Design](https://ant.design/docs/react/introduce) for building easy-to-use user interface elements.

## Prerequisites

Before you build or develop for this project make sure all dependencies are installed, by running `npm install`.

## Development

> The `.vscode/` directory contains some configuration settings for developing with VS Code.
> The project is set up to be auto-formatted with [Husky](https://github.com/typicode/husky) and [Prettier](https://github.com/prettier/prettier), which has a useful VS Code Extension `ext install esbenp.prettier-vscode`.

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console and in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

> See the section about [running tests in React](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build & Deploy

### `npm run build`

Builds the app for production to the `build/` directory. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Docker Deployment

The [`docker/`](docker) directory contains a [Dockerfile](docker/Dockerfile) and a [nginx configuration](docker/nginx.conf). Building the image installs and builds the React app. Running the container serves the built static bundle via a minimal nginx web server on port 80.
