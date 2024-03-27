const infoController = (connection, args) => {
  connection.write(`$11\r\nrole:master\r\n`);
};

module.exports = infoController;
