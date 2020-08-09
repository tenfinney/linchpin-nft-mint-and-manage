import React, { Component } from 'react';
import Identicon from 'identicon.js';
import makeBlockie from 'ethereum-blockies-base64';



const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/8db5dad32a3f490dac7aaf6cb2b23b82')

web3.eth.accounts.create()
const newAccount = web3.eth.accounts.create()
console.log(newAccount)



class GutBc extends Component {

  render() {
    return (

<div class="container">

<div class="d-flex justify-content-center mt-5">

{ this.props.account
              ? <img
                className='ml-1 rounded-5'
                width='24'
                height='24'
                src={makeBlockie(this.props.account, 24).toString()} alt="AcctIconImage"/>
              : <span></span>
            }

            { this.props.account
              ? <img
                className='ml-1 rounded-5 mr-2'
                width='24'
                height='24'
                src={`data:image/png;base64,${new Identicon(this.props.account, 24).toString()}`} alt="AcctIconImage"/>
              : <span></span>
            }

<div className="text-black">Current User: <span id="account">{this.props.account}</span>

</div>
</div>

</div>


);
}
}

export default GutBc;
