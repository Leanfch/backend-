import express from "express";
import judgesSchema from "../models/judges.js";
import {
    submitVote,
    getVotesByGame,
    getVotesByJudge,
    calculateAverageScoresForGame,
} from "../services/votesService.js";

const judgesRoutes = express.Router();

//traer los jueces
judgesRoutes.get("/", async (req, res) => {
    const findedJudges = await judgesSchema
        .find()
        .then((judges) => judges)
        .catch((error) => {
            return { message: error.message };
        });
    res.json(findedJudges);
});

// votar a un juego [GAMEID: por parametro de URL] [JUDGEID: por parámetro en el body]
judgesRoutes.post("/judge/:gameId", async (req, res) => {
    const { gameId } = req.params;
    const { judgeId, gameplayPoints, artPoints, soundPoints, themePoints } =
        req.body;

    try {
        const vote = await submitVote(
            judgeId,
            gameId,
            gameplayPoints,
            artPoints,
            soundPoints,
            themePoints
        );

        res.status(201).json(vote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

judgesRoutes.get("/judge/:judgeId", async (req, res) => {
    const { judgeId } = req.params;

    try {
        const votes = await getVotesByJudge(judgeId);

        res.status(200).json(votes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

judgesRoutes.get("/game/:gameId", async (req, res) => {
    const { gameId } = req.params;

    try {
        const votes = await getVotesByGame(gameId);

        res.status(200).json(votes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

judgesRoutes.get("/averageScores/game/:gameId", async (req, res) => {
    const { gameId } = req.params;

    try {
        const scores = await calculateAverageScoresForGame(gameId);

        res.status(200).json(scores);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default judgesRoutes;
