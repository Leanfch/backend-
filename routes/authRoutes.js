import { Router } from "express"
import {
    register,
    login,
    logout,
    profile,
} from "../controllers/authController.js"
import { authRequire } from "../middleware/validateToken.js"

const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.post("/logout", logout)
authRouter.get("/profile", authRequire, profile)

export default authRouter
