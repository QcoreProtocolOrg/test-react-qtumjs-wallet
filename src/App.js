import logo from './logo.svg';
import './App.css';

import { networks, generateMnemonic } from "qtumjs-wallet";


function App() {
  const network = networks.mainnet

  const wallet = network.fromMnemonic("hold struggle ready lonely august napkin enforce retire pipe where avoid drip",)
  const address = wallet.address;
  // const hex = network.base58ToHex(wallet.address)
  // const base58 = network.hexToBase58(hex)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Address
        <p>
          {address}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
