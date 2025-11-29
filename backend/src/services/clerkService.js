// src/services/clerkService.js
const { clerkClient } = require("@clerk/clerk-sdk-node");
const User = require("../models/user.model");

/**
 * Merge or sync Clerk user to local MongoDB profile.
 * - If user exists by clerkId: update profile fields (email, name, avatar).
 * - If not, create user document with default role 'user'.
 *
 * Returns the Mongo user document.
 */
async function syncClerkUser(clerkId) {
  try {
    if (!clerkId) throw new Error("clerkId required");

    // Fetch Clerk user
    const clerkUser = await clerkClient.users.getUser(clerkId);

    // Extract profile fields (safely)
    const name = clerkUser?.fullName || clerkUser?.firstName || "";
    const email = clerkUser?.primaryEmailAddress?.emailAddress || clerkUser?.emailAddresses?.[0]?.emailAddress || "";
    const phone = clerkUser?.phoneNumbers?.[0]?.phoneNumber || "";
    const avatar = clerkUser?.profileImageUrl || "";

    // Upsert into MongoDB
    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        role: "user",
        name,
        email,
        phone,
        avatar,
      });
    } else {
      user.name = name || user.name;
      user.email = email || user.email;
      user.phone = phone || user.phone;
      user.avatar = avatar || user.avatar;
      await user.save();
    }

    return user;
  } catch (err) {
    console.error("syncClerkUser error:", err);
    throw err;
  }
}

module.exports = {
  syncClerkUser,
};
