const echoController = (connection, args) => {
  const length = args.length;
  connection.write(`$${length}\r\n${args}\r\n`);
};

module.exports = echoController;
