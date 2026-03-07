import express from "express"
import { isAuthenticate } from "../middleware/verifyTokens.js"
import { getUserForSidebar } from "../controller/user.controller.js"

const router = express.Router()

router.get("/", isAuthenticate, getUserForSidebar)

export default router