
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find admin account
        const [admins] = await db.query(
            `SELECT id, name, email, password_hash, role
             FROM admins
             WHERE email = ?
             LIMIT 1`,
            [email.trim()]
        );

        if (admins.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const admin = admins[0];

        // Verify admin password
        const isPasswordValid = await bcrypt.compare(
            password,
            admin.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Only admin role can log in
        if (admin.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }

        // Check JWT configuration
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is missing");
            return res.status(500).json({
                success: false,
                message: "Server authentication configuration error"
            });
        }

        // Generate login token
        const token = jwt.sign(
            {
                id: admin.id,
                role: admin.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "8h"
            }
        );

        return res.status(200).json({
            success: true,
            message: "Admin login successful",
            token,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Admin login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to process admin login"
        });
    }
};

module.exports = {
    adminLogin
};
