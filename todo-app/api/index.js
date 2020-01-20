const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const versionApi = require("./config/versionApi");
const routes = require("./routes");
const middlewares = require("./middlewares/index");

const app = express();

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

middlewares(app);
app.use(cors());
app.use(express.json());
app.use(`${versionApi.uri.baseURl}`, routes);

app.listen(3333);
