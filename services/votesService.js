import Vote from "../models/votes.js";
import Judge from "../models/judges.js";
import Game from "../models/games.js";

const submitVote = async (
    judgeId,
    gameId,
    gameplayPoints,
    artPoints,
    soundPoints,
    themePoints
) => {
    // const judge = await Judge.findById(judgeId);
    // if (!judge) {
    //     throw new Error("Juez no encontrado.");
    // }

    // const game = await Game.findById(gameId);
    // if (!game) {
    //     throw new Error("Juego no encontrado.");
    // }

    const existingVote = await Vote.findOne({
        judge: judgeId,
        game: gameId,
    });

    if (existingVote) {
        throw new Error("Ya has votado por este juego.");
    }

    const newVote = new Vote({
        judge: judgeId,
        game: gameId,
        gameplayPoints,
        artPoints,
        soundPoints,
        themePoints,
    });

    await newVote.save();

    return newVote;
};

const getVotesByJudge = async (judgeId) => {
    const votes = await Vote.find({ judge: judgeId });

    return votes;
};

const getVotesByGame = async (gameId) => {
    const votes = await Vote.find({ game: gameId });

    return votes;
};

const calculateAverageScoresForGame = async (gameId) => {
    const votes = await Vote.find({ game: gameId });

    if (votes.length === 0) {
        return {
            averageGameplay: 0,
            averageArt: 0,
            averageSound: 0,
            averageTheme: 0,
        };
    }

    const totalVotes = votes.length;
    const initialTotal = {
        totalGameplayPoints: 0,
        totalArtPoints: 0,
        totalSoundPoints: 0,
        totalThemePoints: 0,
    };

    const totalPoints = votes.reduce((total, vote) => {
        total.totalGameplayPoints += vote.gameplayPoints;
        total.totalArtPoints += vote.artPoints;
        total.totalSoundPoints += vote.soundPoints;
        total.totalThemePoints += vote.themePoints;
        return total;
    }, initialTotal);

    const averageGameplay = totalPoints.totalGameplayPoints / totalVotes;
    const averageArt = totalPoints.totalArtPoints / totalVotes;
    const averageSound = totalPoints.totalSoundPoints / totalVotes;
    const averageTheme = totalPoints.totalThemePoints / totalVotes;

    return {
        averageGameplay,
        averageArt,
        averageSound,
        averageTheme,
    };
};

export {
    submitVote,
    getVotesByGame,
    getVotesByJudge,
    calculateAverageScoresForGame,
};
