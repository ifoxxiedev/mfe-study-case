# Micro front-ends using Vue, React and Webpack

## Setup MFE projects

### React setup project
- Install dependencies

```sh
yarn add @material-ui/core @material-ui/icons

yarn add react react-dom react-router-dom

yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime 

yarn add -D webpack  webpack-cli webpack-merge webpack-dev-server babel-loader clean-webpack-plugin css-loader html-webpack-plugin style-loader

```

- Configure Webpack

```js

```

### Vue setup project
- Install dependencies

```sh
yarn add chart.js primeflex primevue primeicons vue

yarn add -D @babel/core @babel/preset-env @babel/plugin-transform-runtime @vue/compiler-sfc


yarn add -D webpack  babel-loader css-loader file-loader html-webpack-plugin node-sass sass-loader style-loader vue-loader vue-style-loader clean-webpack-plugin  webpack webpack-cli webpack-dev-server webpack-merge

```

- Configure Webpack

```js

```


## Github workflows (Pipeline CI/CD)
- create folder .github on root folder
- create file 'container.yaml' on .github
- create file 'marketing.yaml' on .github