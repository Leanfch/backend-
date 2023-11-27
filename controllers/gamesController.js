import {
    getGames,
    getGame,
    addGame,
    updateGame,
    deleteGame,
} from "../services/gamesService.js";

const createGame = async (req, res) => {
    const createdGame = await addGame(req.body);
    res.json(createdGame);
};

const getAllGames = async (req, res) => {
    const findedGames = await getGames();
    res.json(findedGames);
};

const getGameById = async (req, res) => {
    const { id } = req.params;
    const fetchedGame = await getGame(id);
    res.json(fetchedGame);
};

const updateGameById = async (req, res) => {
    const { id, name, genre, members, edition } = req.body;
    const updatedGame = await updateGame(id, {
        name,
        genre,
        members,
        edition,
    });
    res.json(updatedGame);
};

const deleteGameById = async (req, res) => {
    const { id } = req.body;
    const deletedGame = await deleteGame(id);
    res.json(deletedGame);
};

export { createGame, getAllGames, getGameById, updateGameById, deleteGameById };
