import { Schema, model } from "mongoose";

const judgeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
});

const Judge = model("Judges", judgeSchema);

export default Judge;
