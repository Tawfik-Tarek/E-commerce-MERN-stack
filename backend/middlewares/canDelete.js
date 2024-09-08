const canDelete = (req, res, next) => {
    if (req.user.isAdmin) {
      return next();
    }

    if (req.user.id === parseInt(req.params.id)) {
      return next();
    }
  
    return res.status(403).json({ message: "Unauthorized: Only admin or the same person can delete" });
  };
  
  module.exports = canDelete;
  