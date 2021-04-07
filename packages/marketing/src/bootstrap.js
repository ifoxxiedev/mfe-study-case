import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Mont function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <App />, 
    el
  );
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRooEl = document.getElementById("_marketing-dev-root");

  if (devRooEl) {
    mount(devRooEl)
  }
}

// Se estivermos trabalhando com um container, devemos
// exportar a função mount
export { mount }