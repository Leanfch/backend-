import { Router } from "express"
import {
    getAllGames,
    getGameById,
    updateGameById,
    getGamesByEditionSortedController,
    // deleteGameById,
    createGame,
} from "../controllers/gamesController.js"
const gamesRoutes = Router()

// crear un juego
gamesRoutes.post("", createGame)

// traer todos los juegos
gamesRoutes.get("", getAllGames)

// traer un juego por su id
gamesRoutes.get("/:id", getGameById)

// actualizar un juego
gamesRoutes.put("", updateGameById)

// traer todos los juegos de una edicion ordenados por puntaje
gamesRoutes.get("/edition/:edition", getGamesByEditionSortedController)

// borrar un juego
// gamesRoutes.delete("", deleteGameById);

export default gamesRoutes
