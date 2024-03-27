const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function getData(key) {
  const dataRepository = repoInstance;

  const { data, exp } = dataRepository.findById(key);

  const nowDate = new Date();

  const isExpired = exp ? nowDate > exp : false;

  if (data === undefined || isExpired) {
    return null;
  }

  return data;
}

module.exports = getData;
