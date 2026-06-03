import express from "express";

const router = express.Router();

// GET /users/me | Auth required (all roles) | get current user profile with role data
// PATCH /users/me | Auth required (all roles) | update own profile information
// PATCH /users/change-password | Auth required (all roles) | change password with old password verification
// GET /users/seller-dashboard | Auth required (seller) | get seller analytics summary
// GET /users | Auth required (admin) | get all users list

router.get("/me", (req, res) => {
    res.json({message: "Get current user profile endpoint"});
});

router.patch("/me", (req, res) => {
    res.json({message: "Update user profile endpoint"});
});

router.patch("/change-password", (req, res) => {
    res.json({message: "Change password endpoint"});
});

router.get("/seller-dashboard", (req, res) => {
    res.json({message: "Seller dashboard endpoint"});
});

router.get("/", (req, res) => {
    res.json({message: "Get all users endpoint"});
});

export default router;