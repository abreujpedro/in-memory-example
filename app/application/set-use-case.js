const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function setData(key, arg) {
  console.log("arg on setData use case", arg);
  const dataRepository = repoInstance;

  dataRepository.save(key, arg);
}

module.exports = setData;
