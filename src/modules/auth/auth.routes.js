import express from "express";

const router = express.Router();

// POST /auth/login | Public | login user and return JWT cookie/token
// POST /auth/register | Public | create customer or seller account (no admin)
// POST /auth/logout | Auth required (all roles) | clear authentication session -> Delete cookie?
// POST /auth/forgot-password | Public | send password reset email/token
// POST /auth/reset-password | Public | reset password using valid token
// GET /auth/me | Auth required (all roles) | return current authenticated user profile

router.post("/login", (req, res) => {
    res.json({message: "Login endpoint"});
});

router.post("/register", (req, res) => {
    res.json({message: "Register endpoint"});
});

router.post("/logout", (req, res) => {
    res.json({message: "Logout endpoint"});
});

router.post("/forgot-password", (req, res) => {
    res.json({message: "Forgot password endpoint"});
});

router.post("/reset-password", (req, res) => {
    res.json({message: "Reset password endpoint"});
});

router.get("/me", (req, res) => {
    res.json({message: "Get current user profile endpoint"});
});

export default router;