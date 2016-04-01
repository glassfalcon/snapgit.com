# Snapgit.com

This site uses [Gatsby](https://github.com/gatsbyjs/gatsby) to generate a static site hosted on GH Pages.

## Local Development

### Dependencies
This project depends on **Node** (`^5.10.1`) and **NPM** (`^3.8.6`).

### Install

Run `npm i` to install all dependencies.


### Development
Run `npm start` to start webpack with file watching and a server. 

The site will be available at `http://localhost:8000`.

## Scripts

### Linting
This project uses [CSS](https://github.com/stylelint/stylelint/) and [JS linting](https://github.com/eslint/eslint). To run both linters:

```sh
npm run lint
```

For CSS linting, run:

```sh
npm run lint:css
```

For JS linting, run:

```sh
npm run lint:js
```

### Build
To generate a local build of the static site, run:

```sh
npm run build
```

### Deploy
To deploy a local build of the static site to GH pages (must have permissions), run:

```sh
npm run deploy
```

### Publish
To generate a local build of the static site, and publish it to GH Pages, run:

```sh
npm run publish
```
