const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function getData(key) {
  const dataRepository = repoInstance;

  const data = dataRepository.findById(key);

  console.log("return data", data);

  return data;
}

module.exports = getData;
