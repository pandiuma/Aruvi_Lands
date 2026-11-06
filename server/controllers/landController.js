
const db = require("../config/db");

// Get all land projects
const getAllLands = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM land_projects ORDER BY created_at DESC"
        );

        res.status(200).json({
            success: true,
            count: rows.length,
            data: rows
        });

    } catch (error) {
        console.error("Get lands error:", error.message);

        res.status(500).json({
            success: false,
            message: "Unable to fetch land projects"
        });
    }
};

module.exports = {
    getAllLands
};
