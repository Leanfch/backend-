import { Schema, model } from "mongoose"
import { judgeSchema } from "../models/judges.js"
import { gameSchema } from "../models/games.js"

const voteSchema = Schema({
    judge: judgeSchema,
    game: gameSchema,
    gameplayPoints: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    artPoints: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    soundPoints: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    themePoints: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
})

const Vote = model("Vote", voteSchema)

export default Vote
