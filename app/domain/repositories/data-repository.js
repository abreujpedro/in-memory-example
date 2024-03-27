class DataRepository {
  constructor(strategy) {
    this.strategy = strategy;
  }

  findById(id) {
    return this.strategy.findById(id);
  }

  save(key, data) {
    return this.strategy.save(key, data);
  }

  remove(id) {
    return this.strategy.remove(id);
  }
}

module.exports = DataRepository;
