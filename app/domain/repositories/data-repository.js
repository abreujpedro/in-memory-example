class DataRepository {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async findById(id) {
    return this.strategy.findById(id);
  }

  async save(key, data) {
    return this.strategy.save(key, data);
  }

  async remove(id) {
    return this.strategy.remove(id);
  }
}

module.exports = DataRepository;
