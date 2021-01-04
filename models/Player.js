import mongoose from "mongoose";
const { Schema } = mongoose;
import { Skills } from "./Skills";
import { Stat } from "./Stat";

/* PlayerSchema will correspond to a collection in your MongoDB database. */
const playerSchema = new Schema({
  email: String,
  ranger: {
    name: String,
    level: String,
    experience: String,
    stat: {
      move: String,
      fight: String,
      shoot: String,
      armour: String,
      will: String,
      health: String,
      recruitment: String,
    },
    skills: {
      acrobatics: String,
      ancientLore: String,
      armoury: String,
      climb: String,
      leadership: String,
      navigation: String,
      perception: String,
      pickLock: String,
      readRunes: String,
      stealth: String,
      strength: String,
      survival: String,
      swim: String,
      track: String,
      traps: String,
    },
    spells: [String],
    abilities: [String],
    items: [String],
    notes: [String],
  },
});

export default mongoose.models.Player || mongoose.model("Player", playerSchema);
