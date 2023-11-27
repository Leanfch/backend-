import { Router } from "express";
// import votesService from "../services/votesService";
import {
    sendVote,
    votesByGame,
    votesByJudge,
    averageScores,
} from "../controllers/votesController.js";

const votesRoutes = Router();

votesRoutes.post("/", sendVote);

votesRoutes.get("/judge/:judgeId", votesByJudge);

votesRoutes.get("/game/:gameId", votesByGame);

votesRoutes.get("/game/:gameId/average", averageScores);

export default votesRoutes;
