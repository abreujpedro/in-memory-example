const DataRepository = require("../../domain/repositories/data-repository");
const MapInMemoryDataRepository = require("../repositories/map-in-memory-data-repository");

const mapRepository = new MapInMemoryDataRepository();

const repoInstance = new DataRepository(mapRepository);

repoInstance;

module.exports = repoInstance;
