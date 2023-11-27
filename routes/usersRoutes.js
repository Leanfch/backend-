import { Router } from "express"
import {
    createUser,
    loginUser,
    revalidateToken,
} from "../controllers/usersController.js"

const usersRoutes = Router()

// crear un usuario
usersRoutes.post("/new", createUser)

// logear un usuario
usersRoutes.post("/login", loginUser)

// validar y revalidar token
usersRoutes.get("/renew", generateJWT, revalidateToken)

export default usersRoutes
