const express = require("express");
const router = express.Router();

const {
  getCommunities,
  createCommunity,
  getCommunityById,
  updateCommunity,
  deleteCommunity
} = require("../controllers/community.controller");

router.get("/", getCommunities);
router.post("/", createCommunity);
router.get("/:id", getCommunityById);
router.put("/:id", updateCommunity);
router.delete("/:id", deleteCommunity);

module.exports = router;
