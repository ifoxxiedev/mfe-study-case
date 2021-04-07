import React from 'react';

import MarketingApp from './components/MarketingApp';
// Desafio como renderizar a função mount?

const Typography = () => (
  <div>Home</div>
)

const Test = () => (
  <div>Marketing</div>
)


export default function App() {
  return (
    <div>
     <MarketingApp></MarketingApp>
    </div>
  )
}