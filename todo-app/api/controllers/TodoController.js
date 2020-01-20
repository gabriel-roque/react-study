const Todo = require("../models/Todo");
const { apibody } = require("../config/versionApi");

module.exports = {
  async index(request, response) {
    const todos = await Todo.find();
    return response.status(200).send({ ...apibody, todos });
  },

  async store(request, response) {
    const { description, completed } = request.body;

    const todo = await Todo.create({
      description,
      completed
    });

    return response.status(201).send({ ...apibody, todo });
  },

  async update(request, response) {
    const filter = { _id: request.params.id };
    const update = { ...request.body };

    let todo = await Todo.findOneAndUpdate(filter, update, { new: true });

    return response.status(200).send({ ...apibody, todo });
  },

  async destroy(request, response) {
    const filter = { _id: request.params.id };

    let todo = await Todo.findByIdAndDelete(filter);

    if (todo === null)
      return response.status(404).send({ ...apibody, error: "Todo not found" });

    return response.status(200).send({ ...apibody });
  }
};
