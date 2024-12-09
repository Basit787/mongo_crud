const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoute");

exports.getRoutes = (app) => {
  app.use("/", authRoutes);
  app.use("/", itemRoutes);
  app.use("/", userRoutes);
};
