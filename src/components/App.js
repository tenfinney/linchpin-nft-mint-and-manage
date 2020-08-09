import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
// import ContentLoader from '../abis/ContentLoader.json'
import ClaimManager from '../abis/ClaimManager.json'
// import EvidenceManagement from '../abis/EvidenceManagement.json'
import Navbar from './Navbar'
import GutTop from './GutTop'
import GutBc from './GutBc'
import Main from './Main'
import Gut1 from './Gut1'
import Gut2 from './Gut2'
import Gut3 from './Gut3'
import Gut4 from './Gut4'
import Gut5 from './Gut5'
import GutBot from './GutBot'
import Footer from './Footer'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Web3 browser not detected. Install Metamask extension or try a different browser.')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = ClaimManager.networks[networkId]
    if(networkData) {
      const claimManager = new web3.eth.Contract(ClaimManager.abi, networkData.address)
      this.setState({ claimManager })
      const claimCount = await claimManager.methods.claimCount().call()
      this.setState({ claimCount })
      // Load claims
      for (var i = 1; i <= claimCount; i++) {
        const claim = await claimManager.methods.claims(i).call()
        this.setState({
          claims: [...this.state.claims, claim]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The blockchain data cannot be found.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      claimCount: 0,
      claims: [],
      loading: true
    }

    this.createClaim = this.createClaim.bind(this)
    this.purchaseClaim = this.purchaseClaim.bind(this)
  }

  createClaim(name, price) {
    this.setState({ loading: true })
    this.state.claimManager.methods.createClaim(name, price).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  purchaseClaim(id, price) {
    this.setState({ loading: true })
    this.state.claimManager.methods.purchaseClaim(id).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">

              </div>


              <div><GutTop account={this.state.account} />           
             </div>

          <div><Gut1 account={this.state.account} />
          </div>

             <div class="col-lg mt-5 mb-0">

      <div class="row">
      <div class="col-lg-8">
            <main role="main">
              { this.state.loading
          ? <div id="loader" className="text-center mt-5 text-danger"><p><i>Sign the transaction and send it to the blockchain. When you see confirmations, <strong>refresh your page.</strong></i></p></div>
          
          : <Main
          claims={this.state.claims}
          createClaim={this.createClaim}
          purchaseClaim={this.purchaseClaim} />
        }
            </main>
            </div>
            </div>

            </div>

        </div>

        
                    <div><GutBc account={this.state.account} />
                      </div>
                      


            <div><Gut2 account={this.state.account} />
            </div>

            <div><Gut3 account={this.state.account} />
            </div>

            <div><Gut4 account={this.state.account} />
            </div>

            <div><Gut5 account={this.state.account} />
            </div>

            <div><GutBot account={this.state.account} />
              </div>

            <div><Footer account={this.state.account} />
              </div>

      </div>  

    
    );
  }
}

export default App;
