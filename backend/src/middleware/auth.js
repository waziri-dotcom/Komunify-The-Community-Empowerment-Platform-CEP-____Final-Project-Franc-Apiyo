const { Clerk } = require('@clerk/clerk-sdk-node');

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

// Extract Bearer token
function getToken(req) {
  const header = req.headers.authorization;
  if (!header) return null;
  const [type, token] = header.split(" ");
  return type === "Bearer" && token ? token : null;
}

module.exports = async function auth(req, res, next) {
  try {
    const token = getToken(req);
    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    const session = await clerk.verifyToken(token);

    req.auth = {
      userId: session.sub,
      sessionId: session.sid,
      claims: session
    };

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
