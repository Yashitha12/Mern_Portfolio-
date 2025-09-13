import mongoose from "mongoose";

const QualificationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true, trim: true },
    institution: { type: String, required: true, trim: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number },
    grade: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Qualification", QualificationSchema);
