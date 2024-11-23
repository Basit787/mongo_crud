const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");

exports.getRoutes = (app) => {
  app.use("/api", itemRoutes);
  app.use("/api", userRoutes);
};
