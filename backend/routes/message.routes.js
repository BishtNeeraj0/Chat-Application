import express from "express";
import { isAuthenticate } from "../middleware/verifyTokens.js";
import { sendMessage, getMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/send/:id", isAuthenticate, sendMessage);
router.get("/:id", isAuthenticate, getMessage);

export default router;
