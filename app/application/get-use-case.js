const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function getData(key) {
  const dataRepository = repoInstance;

  const data = dataRepository.findById(key);

  console.log("return data", data);

  if (data === undefined) {
    return null;
  }

  return data;
}

module.exports = getData;
