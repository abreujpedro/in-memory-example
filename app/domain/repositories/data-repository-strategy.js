class DataRepositoryStrategy {
  constructor() {
    if (new.target === DataRepositoryStrategy) {
      throw new Error(
        "Cannot instantiate the abstract class DataRepository directly."
      );
    }
  }

  async findById(id) {
    throw new Error("Abstract method findById must be implemented.");
  }

  async save(object) {
    throw new Error("Abstract method save must be implemented.");
  }

  async remove(id) {
    throw new Error("Abstract method remove must be implemented.");
  }
}

module.exports = DataRepositoryStrategy;
