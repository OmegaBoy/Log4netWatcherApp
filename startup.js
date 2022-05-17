const express = require("express"),
  cors = require("cors"),
  serveStatic = require("serve-static"),
  history = require("connect-history-api-fallback"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var env = process.env.NODE_ENV || "development";
app.enable("trust proxy");
app.use((req, res, next) => {
  if (env != "development") {
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});
const routes = require("./Backend/Routes/app.route");
app.use(routes);

app.use(history());
app.use(serveStatic(__dirname + "/dist/pwa"));
app.listen(port);
console.log("Listening on port: " + port);

module.exports = { app };
