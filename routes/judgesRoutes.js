import express from "express"
import judgesSchema from "../models/judges.js"
import {
    getJudges,
    postVote,
    getVotesByJudgeId,
    getVotesByGameId,
    getAverageScoresByGameId,
} from "../controllers/judgesController.js"

const judgesRoutes = express.Router()

//traer los jueces
judgesRoutes.get("/", getJudges)

// votar a un juego [judgeId y gameId por el body]
judgesRoutes.post("/", postVote)

judgesRoutes.get("/judge/:judgeId", getVotesByJudgeId)

judgesRoutes.get("/game/:gameId", getVotesByGameId)

judgesRoutes.get("/averageScores/game/:gameId", getAverageScoresByGameId)

export default judgesRoutes
