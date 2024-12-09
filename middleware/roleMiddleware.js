const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.json({ message: "Only admin can perform this task" });
  }
  next();
};

module.exports = { isAdmin };
