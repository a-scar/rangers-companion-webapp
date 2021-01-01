import mongoose from "mongoose";
const { Schema } = mongoose;
import { Skills } from "./Skills";
import { Stats } from "./Stats";

/* PlayerSchema will correspond to a collection in your MongoDB database. */
const playerSchema = new Schema({
  email: String,
  ranger: {
    name: String,
    level: String,
    experience: String,
    stats: Stats,
    skills: Skills,
    spells: [String],
    abilities: [String],
    items: [String],
    notes: [String],
  },
});

export default mongoose.models.Player || mongoose.model("Player", playerSchema);
