import React from 'react'
import ReactDOM from 'react-dom'
import * as fcl from "@onflow/fcl"
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

fcl.config()
  // master origin
  // .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet
  // .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn") // use Blocto testnet wallet

  // ref) https://docs.blocto.app/blocto-sdk/javascript-sdk/flow/login-register
  // POP/RPC
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("discovery.wallet.method", "POP/RPC")
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn")
    
  // HTTP/POST
  // .put("accessNode.api", "https://rest-testnet.onflow.org")
  // .put(
  //   "discovery.wallet",
  //   "https://flow-wallet-testnet.blocto.app/api/flow/authn"
  // )
  // .put("discovery.wallet.method", "HTTP/POST")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
