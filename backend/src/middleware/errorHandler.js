// src/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  const message = process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message || 'Internal Error';
  res.status(status).json({ error: message, details: process.env.NODE_ENV === 'production' ? undefined : err.stack });
}

module.exports = { errorHandler };
