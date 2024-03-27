const echoController = require("../../infrastructure/controllers/echo-controller.js");
const pongController = require("../../infrastructure/controllers/pong-controller.js");

const handleRoute = (connection, route, args) => {
  const echoRoute = [
    "*2\r\n$4\r\necho\r\n$3\r\n",
    () => {
      echoController(connection, args);
    },
  ];

  const pongRoute = [
    "*1\r\n$4\r\nping\r\n",
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
