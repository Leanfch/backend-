import { Schema, model } from "mongoose";

const gameSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        required: true,
    },
    edition: {
        type: Number,
        required: true,
    },
});

const Game = model("Games", gameSchema);

export default Game;
