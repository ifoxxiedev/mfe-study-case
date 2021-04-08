import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing  from './components/Landing';
import Pricing  from './components/Pricing';

// No build iremos adicionar um prefixo em cada classe CSS compilada pelo JS(css-in-js)
// evitando colisoes de classes
const generatedClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export default function App() {
  return (
    <div>
      <StylesProvider  generateClassName={generatedClassName} >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}