const ClaimManager = artifacts.require("ClaimManager");

module.exports = function(deployer) {
  deployer.deploy(ClaimManager);
};
