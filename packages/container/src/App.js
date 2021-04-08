import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
// Desafio como renderizar a função mount?

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const Typography = () => (
  <div>Home</div>
)

const Test = () => (
  <div>Marketing</div>
)


export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}