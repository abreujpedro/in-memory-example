const getData = require("../../application/get-use-case.js");

const getController = (connection, args) => {
  const keyToGet = args[1];

  const data = getData(keyToGet);
  if (data === null) {
    connection.write(`$-1\r\n`);
  } else {
    connection.write(`$${data.length}\r\n${data}\r\n`);
  }
};

module.exports = getController;
