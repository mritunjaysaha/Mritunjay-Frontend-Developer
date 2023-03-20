const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { getAllCapsules, getCapsulesByStatus, getCapsulesByOriginalLaunch, getCapsulesByType } = require("../controllers/capsules")

const router = express.Router();


router.param("userId", getUserById)


router.get("/:userId", isSignedIn, isAuthenticated, getAllCapsules);
router.get("/status/:userId", isSignedIn, isAuthenticated, getCapsulesByStatus);
router.get("/originalLaunch/:userId", isSignedIn, isAuthenticated, getCapsulesByOriginalLaunch);
router.get("/type/:userId", isSignedIn, isAuthenticated, getCapsulesByType);

module.exports = router;