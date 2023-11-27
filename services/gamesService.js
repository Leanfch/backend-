import gameSchema from "../models/games.js";

const addGame = (game) => {
    const newGame = new gameSchema(game);
    newGame
        .save()
        .then((savedGame) => savedGame)
        .catch((error) => {
            return { message: error.message };
        });
    return newGame;
};

const getGames = () => {
    return gameSchema
        .find()
        .then((games) => games)
        .catch((error) => {
            return { message: error.message };
        });
};

const getGame = (id) => {
    return gameSchema
        .findById(id)
        .then((games) => games)
        .catch((error) => {
            return { message: error.message };
        });
};

const updateGame = (id, game) => {
    return gameSchema
        .findOneAndUpdate(
            { _id: id },
            { $set: game },
            { returnOriginal: false }
        )
        .then((game) => game)
        .catch((error) => {
            return { message: error.message };
        });
};

const deleteGame = (id) => {
    return gameSchema
        .findOneAndDelete({ _id: id })
        .then((game) => game)
        .catch((error) => {
            return { message: error.message };
        });
};

export { addGame, getGames, getGame, updateGame, deleteGame };
