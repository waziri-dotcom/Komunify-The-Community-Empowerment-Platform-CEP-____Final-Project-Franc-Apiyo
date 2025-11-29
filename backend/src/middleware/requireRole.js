module.exports = function requireRole(...allowedRoles) {
  return function (req, res, next) {
    try {
      const userRole = req.user?.role;

      if (!userRole) {
        return res.status(403).json({
          message: "Forbidden: No role assigned",
        });
      }

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Access denied: Insufficient role permissions",
        });
      }

      next();
    } catch (error) {
      console.error("Role Middleware Error:", error);
      res.status(500).json({ message: "Role validation failed" });
    }
  };
};
