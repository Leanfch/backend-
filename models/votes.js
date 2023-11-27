import { Schema, model } from "mongoose";

const voteSchema = Schema({
    judge: {
        type: Schema.Types.ObjectId,
        ref: "Judge",
        required: true,
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: "Game",
        required: true,
    },
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
});

const Vote = model("Vote", voteSchema);

export default Vote;
