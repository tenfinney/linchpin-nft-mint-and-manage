import React, { Component } from 'react';
import Identicon from 'identicon.js';
import makeBlockie from 'ethereum-blockies-base64';



class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow mb-5">

<div class="container">

            { this.props.account
              ? <img
                className='ml-1 rounded-5'
                width='50'
                height='50'
                src={makeBlockie(this.props.account, 50).toString()} alt="AcctIconImage"/>
              : <span></span>
            }

            { this.props.account
              ? <img
                className='ml-1 rounded-5'
                width='50'
                height='50'
                src={`data:image/png;base64,${new Identicon(this.props.account, 50).toString()}`} alt="AcctIconImage"/>
              : <span></span>
            }



<small className="text-white">Account: <span id="account">{this.props.account}</span></small>

            <a class="navbar-brand js-scroll-trigger" href="#page-top">linchpin apps</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

            <i class="fas fa-bars "></i>
        </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
           <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#executetx1">Verify Transaction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Available Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Interact with Bluefin</a>
          </li>
          </ul>
      </div>
      </div>
  </nav>
);
}
}

export default Navbar;
