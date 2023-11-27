import {
    submitVote,
    getVotesByGame,
    getVotesByJudge,
    calculateAverageScoresForGame,
} from "../services/votesService.js";

const sendVote = async (req, res) => {
    try {
        const {
            judge,
            game,
            gameplayPoints,
            artPoints,
            soundPoints,
            themePoints,
        } = req.body;
        const vote = await submitVote(
            judge,
            game,
            gameplayPoints,
            artPoints,
            soundPoints,
            themePoints
        );
        res.status(201).json(vote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const votesByJudge = async (req, res) => {
    const { judgeId } = req.params;
    const votes = await getVotesByJudge(judgeId);
    res.json(votes);
};

const votesByGame = async (req, res) => {
    const { gameId } = req.params;
    const votes = await getVotesByGame(gameId);
    res.json(votes);
};

const averageScores = async (req, res) => {
    const { gameId } = req.params;
    const averageScores = await calculateAverageScoresForGame(gameId);
    res.json(averageScores);
};

export { sendVote, votesByGame, votesByJudge, averageScores };
