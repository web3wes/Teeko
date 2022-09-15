const routes = require("next-routes")();

routes
  .add("/shows", "/shows")
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/wallet", "/campaigns/wallet")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/wallet", "/campaigns/wallet")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
