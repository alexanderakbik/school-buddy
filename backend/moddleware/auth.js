// middleware/auth.js

function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      return next();
    }
    res.status(403).json({ message: 'Admin access required' });
  }
  
  function isParent(req, res, next) {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'parent')) {
      return next();
    }
    res.status(403).json({ message: 'Parent access required' });
  }
  
  module.exports = { isAdmin, isParent };
  