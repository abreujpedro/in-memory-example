const net = require("net");
const handleRoute = require("./domain/routes/routes.js");
const {
  parserCommand,
  parserArgs,
} = require("./infrastructure/parser/parser.js");

// You can use print statements as follows for debugging, they'll be visible when running tests
// console.log("Logs from your program will appear here!");

const args = process.argv;

const portIndex = args.indexOf("--port");

let portValue = 6379;

if (portIndex !== -1 && args[portIndex + 1]) {
  portValue = Number(args[portIndex + 1]);
}

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

server.listen(portValue, "127.0.0.1");
