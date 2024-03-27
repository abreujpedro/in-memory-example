const getData = require("../../application/get-use-case.js");

const getController = (connection, args) => {
  const keyToGet = args[1];

  const data = getData(keyToGet);

  connection.write(`$${data.length}\r\n${data}\r\n`);
};

module.exports = getController;
