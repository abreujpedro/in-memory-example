const setData = require("../../application/set-use-case.js");

const setController = (connection, args) => {
  const keyToSet = args[1];

  const dataToSet = args[3];

  setData(keyToSet, dataToSet);

  connection.write(`+OK\r\n`);
};

module.exports = setController;
