global.config = require("../config");
const chalk = require("chalk");
const http = require("http");
const app = require("../server");

const port = global.config.port || "80";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, err => {
  if (err) {
    return console.log("😫", chalk.red(err));
  }
  console.log(`🚀  Now listening on port ${chalk.green(port)}`);
});
