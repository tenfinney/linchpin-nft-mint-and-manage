import React, { Component } from 'react';
import Identicon from 'identicon.js';
import makeBlockie from 'ethereum-blockies-base64';

class Gut4 extends Component {

  render() {
    return (


<section id="signup" class="signup-section">
      <div class="container">
      <div class="row">
      <div class="col-md-10 col-lg-8 mx-auto text-center">

            <i class="fas fa-globe-americas text-white fa-4x "></i>
        <h2 class="text-white mb-5">
        <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">Transaction Lookup <i class="fab fa-ethereum text-primary"></i></a></h2>
        <br></br>

        <h1 class="text-white">Prove claims with Tidbits.</h1>
<p class="text-white">Tidbits are electronic files used as admissible evidence in court systems. Every admissible electronic document needs to satisfy State or Federal Rules of Evidence which usually requires a reliable and proveable chain-of-custody record. The Tidbits application allows for quick and easy tools for encrypting electronic files the safely stores them to worldwide network of public node computers which are available 24/7/365 anywhere in the world.</p>
<a class="btn btn-primary" href="#content-submit">Encrypt & Upload Now</a>

<br></br>

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
            <small className="text-white">Current User: <span id="account">{this.props.account}</span></small>
            
      </div>
      </div>
      </div>
      

            
  </section>

);
}
}

export default Gut4;
