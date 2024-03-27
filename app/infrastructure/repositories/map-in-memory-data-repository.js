const DataRepositoryStrategy = require("../../domain/repositories/data-repository-strategy.js");
const dataInMemory = require("../in-memory/in-memory-instance.js");

class MapInMemoryDataRepository extends DataRepositoryStrategy {
  constructor() {
    super();
    this.data = dataInMemory;
  }

  async findById(id) {
    return this.data.get(id);
  }

  async save(key, data) {
    this.dados.set(key, data);
  }

  async remove(id) {
    this.dados.delete(id);
  }
}

module.exports = MapInMemoryDataRepository;
