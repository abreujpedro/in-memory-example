const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function setData(key, arg) {
  const dataRepository = repoInstance;

  dataRepository.save(key, arg);
}

module.exports = setData;
