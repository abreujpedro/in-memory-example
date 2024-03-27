const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function getData(key) {
  const dataRepository = repoInstance;

  dataRepository.findById(key);
}

module.exports = getData;
