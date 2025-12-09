const serverless = require("serverless-http");
const app = require("../server"); // import the Express app

module.exports = serverless(app);
