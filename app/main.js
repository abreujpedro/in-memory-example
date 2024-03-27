const net = require("net");
const handleRoute = require("./domain/routes/routes.js");
const {
  parserCommand,
  parserArgs,
} = require("./infrastructure/parser/parser.js");

// You can use print statements as follows for debugging, they'll be visible when running tests.
// console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage

const server = net.createServer((connection) => {
  connection.on("close", () => {
    connection.end();
    server.close();
  });

  connection.on("data", (data) => {
    const command = parserCommand(data);

    const args = parserArgs(data);

    handleRoute(connection, command, args);
  });
  // Handle connection
});

server.listen(6379, "127.0.0.1");
