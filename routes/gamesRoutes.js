import { Router } from "express";
import {
    getAllGames,
    getGameById,
    updateGameById,
    deleteGameById,
    createGame,
} from "../controllers/gamesController.js";
const gamesRoutes = Router();

// crear un juego
gamesRoutes.post("", createGame);

// traer todos los juegos
gamesRoutes.get("", getAllGames);

// traer un juego por su id
gamesRoutes.get("/:id", getGameById);

// actualizar un juego
gamesRoutes.put("", updateGameById);

// borrar un juego
gamesRoutes.delete("", deleteGameById);

export default gamesRoutes;
