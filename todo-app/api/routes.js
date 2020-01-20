const { Router } = require("express");
const TodoController = require("./controllers/TodoController");

const routes = Router();

routes.get("/todos", TodoController.index);
routes.post("/todos", TodoController.store);
routes.put("/todos/:id", TodoController.update);
routes.delete("/todos/:id", TodoController.destroy);

module.exports = routes;
