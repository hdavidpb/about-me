import mongoose from "mongoose";

const CurriculumSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: process.env.AUTHOR_ID,
  },
  experience: {
    type: [
      {
        title: String,
        subtitle: String,
        place: String,
        date: String,
        description: String,
      },
    ],
    default: [],
  },
  education: {
    type: [
      {
        title: String,
        subtitle: String,
        place: String,
        date: String,
        description: String,
      },
    ],
    default: [],
  },
  abilities: {
    type: [String],
    default: [],
  },
  languages: {
    type: [String],
    default: [],
  },
  skills: {
    type: [String],
    default: [],
  },
});

export default mongoose.models.Curriculum ||
  mongoose.model("Curriculum", CurriculumSchema);
