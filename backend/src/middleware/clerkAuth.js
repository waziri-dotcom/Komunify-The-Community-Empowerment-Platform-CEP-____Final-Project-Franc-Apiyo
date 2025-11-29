const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

module.exports = ClerkExpressWithAuth({
  onError: (err, req, res) => {
    console.error("Clerk Auth Error:", err);
    res.status(401).json({ message: "Unauthorized: Invalid Clerk session" });
  },
});
