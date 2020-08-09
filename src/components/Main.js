import React, { Component } from 'react';

class Main extends Component {

render() {
return (
<div className="container-fluid mt-5">
<div className="row">
<main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '800px' }}>


<br></br>
<hr></hr>

<div className="content mr-auto ml-auto">
<p>&nbsp;</p>
<h2 class="mdtextblue"><strong>Add an encrypted claim here &nbsp;<i class="fab fa-ethereum"></i></strong></h2>
<h5 class="mb-2 text-black">Do not add unencrypted claims unless you want them to be publicly viewed.</h5>





<form onSubmit={(event) => {
event.preventDefault()
const name = this.claimName.value
const price = window.web3.utils.toWei(this.claimPrice.value.toString(), 'Finney')
this.props.createClaim(name, price)
}}>



<div className="form-group mr-sm-2">


<input
id="claimName"
type="text"
ref={(input) => { this.claimName = input }}
className="form-control"
placeholder="Add claim here. Most likely an encrypted string of text."
required />
</div>


<div className="form-group mr-sm-2">
<input
id="claimPrice"
type="text"
ref={(input) => { this.claimPrice = input }}
className="form-control"
placeholder="Add the price or cost of the claim here in Finney (1/1000 Ether)"
required />
</div>



<button type="submit" className="btn btn-secondary">Add Claim</button>
</form>







</div>


<hr></hr>


<div className="justify-content-center mt-2 text-danger"><medium>Instant encryption tools:</medium>
<div className="justify-content-center text-info"><small><a href="https://codebeautify.org/encrypt-decrypt" target="_blank" rel="noopener noreferrer" ><span role="img" aria-label="lock">&#128272;</span> AES-Rijndael CBC (cipher block chaining) encryption:</a></small>
<a href="https://tweetnacl.js.org/#/secretbox" target="_blank" rel="noopener noreferrer" ><br></br> <small><span role="img" aria-label="lock">&#128272;</span>  Secret-key authenticated encryption, Public-key authenticated encryption, Hashing, and Public-key signatures </small></a>
<a href="https://www.devglan.com/online-tools/aes-encryption-decryption" target="_blank" rel="noopener noreferrer" ><br></br> <small><span role="img" aria-label="lock">&#128272;</span>  AES Encryption and Decryption Online Tool </small></a>

</div>
</div>


<p>&nbsp;</p>


<h2>Acquire Claim</h2>




{ this.props.claims.map((claim, key) => {
return (



<div className="card mb-4" key={key} >
  
<div className="card-header">


<p className="textdesc"><small>Claim Number: <span id="clam-no"><emblue>{claim.id.toString()}</emblue></span></small></p>

<hr></hr>

<small className="text-black">The data below is an encrypted claim. If you want to puchase the claim of the claim, select "Acquire Claim" button and execute a transaction on the public blockchain. </small>

<hr></hr>

<p className="textdesc"><small>Claim: <emblue><span id="claim-name">{claim.name}</span></emblue></small></p>

<hr></hr>


<p className="textdesc"><small>Claim Price: <span id="claim-price"><emblue>{window.web3.utils.fromWei(claim.price.toString(), 'Finney')} Finney</emblue></span></small></p>

<hr></hr>

<p className="textdesc"><small>Claim Owner: <emred><span id="claim-owner">{claim.owner}</span></emred></small></p>

<hr></hr>



{ !claim.purchased
? <button
className="btn btn-primary"
name={claim.id}
value={claim.price}
onClick={(event) => {
this.props.purchaseClaim(event.target.name, event.target.value)
}}
>
Acquire Claim
</button>
: null
}


</div>

</div>
)
})}

</main>
</div>

</div>
);
}
}

export default Main;