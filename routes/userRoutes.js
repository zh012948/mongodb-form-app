const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Save user to MongoDB
router.post("/add-user", async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: "User added successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users from MongoDB
router.get("/get-users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

module.exports = router;
