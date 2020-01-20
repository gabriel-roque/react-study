const versionApi = require("../config/versionApi");

module.exports = app => {
  app.use((request, response, next) => {
    response.setHeader("X-API-VERSION", versionApi.header.version);
    response.setHeader("X-API-ORIGIN", versionApi.header.origin);
    next();
  });
  // insert new middleware here
};
