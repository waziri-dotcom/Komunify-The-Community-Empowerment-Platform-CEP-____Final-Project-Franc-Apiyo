const express = require("express");
const router = express.Router();

const {
  createFoodAid,
  getFoodAids,
  getFoodAidById,
  updateFoodAid,
  deleteFoodAid,
} = require("../controllers/foodAid.controller"); // make sure path is correct

router.post("/", createFoodAid);
router.get("/", getFoodAids);
router.get("/:id", getFoodAidById);
router.put("/:id", updateFoodAid);
router.delete("/:id", deleteFoodAid);

module.exports = router;
