import { Router } from "express"
import accountController from "../controllers/accountController.js"
import { validateAccount } from "../middleware/account.js"

const usersRoutes = Router()

// crear un usuario
usersRoutes.post("/new", [validateAccount], accountController.createAccount)

export default usersRoutes
