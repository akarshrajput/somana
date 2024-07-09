import mongoose from "mongoose";
import User from "./userModel"; // Ensure the User model is imported

const musicSchema = new mongoose.Schema(
  {
    musicName: {
      type: String,
      trim: true,
      maxLength: [100, "Somg name have less than 100 characters"],
    },
    musicType: {
      type: String,
      trim: true,
    },
    featuredImage: {
      type: String,
    },
    audioLink: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
    artist: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Blog must have an author"],
    },
    credits: {
      type: String,
      trim: true,
    },
    lyrics: {
      type: String,
      default: "Not defined by artist",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

musicSchema.pre(/^find/, function (next) {
  this.populate({
    path: "author",
    select: "name email photo verified",
  });
  next();
});

const Music = mongoose.models.Music || mongoose.model("Music", musicSchema);

export default Music;
