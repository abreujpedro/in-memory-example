const echoController = require("../../infrastructure/controllers/echo-controller.js");
const pongController = require("../../infrastructure/controllers/pong-controller.js");

const handleRoute = (connection, route, args) => {
  const echoRoute = [
    "echo",
    () => {
      echoController(connection, args);
    },
  ];

  const pongRoute = [
    "ping",
    () => {
      pongController(connection);
    },
  ];

  const notFound = () => {
    connection.write("-ERR Not Found\r\n");
  };

  const routeMap = new Map([echoRoute, pongRoute]);

  const controller = routeMap.get(route) ?? notFound;

  console.log(route, controller);
  controller();
};

module.exports = handleRoute;
