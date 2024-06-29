require("dotenv").config();
require("./config/database").connect();

import http from "http";
const app = require("./app");
const debug = require("debug")("node-angular");

var server = http.createServer(app);

// server.listen(PORT, (): void => {
//   console.log(`Server Running on, "http://localhost:${PORT}"`);
// });

const normalizePort = (val: any) => {
  var p = parseInt(val, 10);

  if (isNaN(p)) {
    // named pipe
    return val;
  }

  if (p >= 0) {
    // port number
    return p;
  }

  return false;
};

const onError = (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "4000");

app.set("port", port);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);