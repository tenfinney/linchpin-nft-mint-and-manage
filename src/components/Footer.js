import React, { Component } from 'react';
import Identicon from 'identicon.js';
import makeBlockie from 'ethereum-blockies-base64';



class Footer extends Component {

  render() {
    return (


<footer class="footer text-center bg-black">
      <div class="container">
      <div class="row">



      <div class="col-lg-12 h-100 text-center text-lg-center my-auto">
           <ul class="list-inline mt-2 mb-2">
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">WorldLaw</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">Users</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">Bluefin</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">Gumshoe</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">LawDocs</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">Tidbits</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="https://github.com/worldlaw">Judiciary</a>
          </li>
          </ul>
      </div>

   
      </div>

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

<small className="text-white text-center">Account: <span id="account">{this.props.account}</span></small>

      <div class="container">
            <p class="copyright m-0 mt-5 text-center text-white">Copyright &copy; WorldLaw 2020 - WorldLaw.eth</p>
      </div>
      </div>

      </footer>

);
}
}

export default Footer;
