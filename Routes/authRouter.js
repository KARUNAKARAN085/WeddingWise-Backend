import express from "express";
import { loginUser, registerEvent, registerUser } from "../Controllers/authController.js";
import { verifyToken } from "../Middleware/verifyToken.js";

const router = express.Router();

router.get("/", (_, res) => {       
    res.send("Welcome to Auth provider routes");
});

router.post("/register-user", registerUser);
router.post("/login-user", loginUser );
router.post("/register-event", registerEvent);

export default router;

