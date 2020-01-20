const VERSION = "v1";

const uri = {
  version: VERSION,
  baseURl: `/${VERSION}/api`
};

const header = {
  version: VERSION,
  origin: "todoApp"
};

const apibody = {
  version: VERSION,
  origin: "todoApp"
};

module.exports = { uri, header, apibody };
