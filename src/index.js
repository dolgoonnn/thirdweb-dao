import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// Import thirdweb provider and Rinkeby ChainId

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

// Wrap your app with the thirdweb provider
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);