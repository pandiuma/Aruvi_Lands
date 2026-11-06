
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./config/db");

const landRoutes = require("./routes/landRoutes");

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Land project routes
app.use("/api/lands", landRoutes);

// Serve uploaded images
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// Test API
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Aruvi Lands API"
    });
});

// Test MySQL connection
app.get("/api/db-test", async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT 1 AS connected"
        );

        res.json({
            success: true,
            message: "MySQL connected successfully",
            database: rows[0]
        });

    } catch (error) {
        console.error("Database error:", error.message);

        res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Aruvi Lands server running on port ${PORT}`
    );
});
