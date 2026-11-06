
const express = require("express");

const router = express.Router();

const {
    getAllLands
} = require("../controllers/landController");

// GET all land projects
router.get("/", getAllLands);

module.exports = router;
