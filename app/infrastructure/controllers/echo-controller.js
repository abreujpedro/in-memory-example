const echoController = (connection, args) => {
  const length = args[1].length;
  connection.write(`$${length}\r\n${args[1]}\r\n`);
};

module.exports = echoController;
