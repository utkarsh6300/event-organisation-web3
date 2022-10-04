const EventOrganisation = artifacts.require("EventOrganisation");

module.exports = function (deployer) {
  deployer.deploy(EventOrganisation);
};
