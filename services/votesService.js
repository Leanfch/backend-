import Vote from "../models/votes.js"
import Judge from "../models/judges.js"
import Game from "../models/games.js"

const submitVote = async (
    judgeId,
    gameId,
    gameplayPoints,
    artPoints,
    soundPoints,
    themePoints
) => {
    const judge = await Judge.findById(judgeId)
    const game = await Game.findById(gameId)
    // const judge = await Judge.findById(judgeId);
    // if (!judge) {
    //     throw new Error("Juez no encontrado.");
    // }

    // const game = await Game.findById(gameId);
    // if (!game) {
    //     throw new Error("Juego no encontrado.");
    // }
    if (!judge || !game) {
        throw new Error("Juez o juego no encontrado.")
    }

    const existingVote = await Vote.findOne({
        judge: judge._id,
        game: game._id,
    })

    if (existingVote) {
        throw new Error("Ya has votado por este juego.")
    }

    const newVote = new Vote({
        judge,
        game,
        gameplayPoints,
        artPoints,
        soundPoints,
        themePoints,
    })

    await newVote.save()

    return newVote
}

const getVotesByJudge = async (judgeId) => {
    const votes = await Vote.find({ "judge._id": judgeId })

    return votes
}

const getVotesByGame = async (gameId) => {
    const votes = await Vote.find({ "game._id": gameId })
    return votes
}

const calculateAverageScoresForGame = async (gameId) => {
    const votes = await Vote.find({ "game._id": gameId })

    if (votes.length === 0) {
        return {
            averageGameplay: 0,
            averageArt: 0,
            averageSound: 0,
            averageTheme: 0,
        }
    }

    const totalVotes = votes.length
    const initialTotal = {
        totalGameplayPoints: 0,
        totalArtPoints: 0,
        totalSoundPoints: 0,
        totalThemePoints: 0,
    }

    const totals = votes.reduce((acc, vote) => {
        return {
            totalGameplayPoints: acc.totalGameplayPoints + vote.gameplayPoints,
            totalArtPoints: acc.totalArtPoints + vote.artPoints,
            totalSoundPoints: acc.totalSoundPoints + vote.soundPoints,
            totalThemePoints: acc.totalThemePoints + vote.themePoints,
        }
    }, initialTotal)

    return {
        averageGameplay: totals.totalGameplayPoints / totalVotes,
        averageArt: totals.totalArtPoints / totalVotes,
        averageSound: totals.totalSoundPoints / totalVotes,
        averageTheme: totals.totalThemePoints / totalVotes,
    }
}

export {
    submitVote,
    getVotesByGame,
    getVotesByJudge,
    calculateAverageScoresForGame,
}
