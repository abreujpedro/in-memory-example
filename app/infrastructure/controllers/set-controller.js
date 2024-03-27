const setData = require("../../application/set-use-case.js");

const setController = (connection, args) => {
  const keyToSet = args[1];

  const dataToSet = args[3];

  const expDateString = args[7];

  const expDate = Number(expDateString) || null;

  setData(keyToSet, dataToSet, expDate);

  connection.write(`+OK\r\n`);
};

module.exports = setController;
