
const express = require("express");

const router = express.Router();

const {
    adminLogin
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");

// Admin login
router.post("/login", adminLogin);

// Verify admin authentication
router.get("/verify", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Admin authentication successful",
        admin: req.admin
    });
});

module.exports = router;
