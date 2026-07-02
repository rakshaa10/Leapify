const express = require("express");

const {
  getAllOpportunities,
  getOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  getMyOpportunities,
} = require("../controllers/opportunityController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// ==================== Public Routes ====================

router.get("/", getAllOpportunities);

router.get(
  "/my-opportunities",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  getMyOpportunities,
);

router.get("/:id", getOpportunityById);

// ==================== Organizer Routes ====================



router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  upload.single("banner"),
  createOpportunity,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  deleteOpportunity,
);

module.exports = router;
