const repoInstance = require("../infrastructure/factories/in-memory-repository-factory");

function setData(key, arg, timeExp) {
  const dataRepository = repoInstance;

  let dateToExp = null;

  if (timeExp) {
    const nowDate = new Date();

    dateToExp = new Date(nowDate.getTime() + timeExp);
  }

  const dataObj = { data: arg, exp: dateToExp ?? null };

  dataRepository.save(key, dataObj);
}

module.exports = setData;
