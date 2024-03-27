const echoController = require("../../infrastructure/controllers/echo-controller.js");
const pongController = require("../../infrastructure/controllers/pong-controller.js");
const setController = require("../../infrastructure/controllers/set-controller.js");
const getController = require("../../infrastructure/controllers/get-controller.js");
const infoController = require("../../infrastructure/controllers/info-controller.js");

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

  const setRoute = [
    "set",
    () => {
      setController(connection, args);
    },
  ];

  const getRoute = [
    "get",
    () => {
      getController(connection, args);
    },
  ];

  const infoRoute = [
    "info",
    () => {
      infoController(connection, args);
    },
  ];

  const notFound = () => {
    connection.write("-ERR Not Found\r\n");
  };

  const routeMap = new Map([
    echoRoute,
    pongRoute,
    setRoute,
    getRoute,
    infoRoute,
  ]);

  const controller = routeMap.get(route) ?? notFound;

  console.log(route, controller);
  controller();
};

module.exports = handleRoute;
