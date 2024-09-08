const isAdmin = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }

  if (!req.user.isAdmin) {
    return res
      .status(403)
      .json({ message: "Unauthorized: Admin access required" });
  }

  next();
};

module.exports = isAdmin;