const pongController = (connection) => {
  connection.write("+PONG\r\n");
};

module.exports = pongController;
