import mongoose from "mongoose";
import { PlaylistDocument, PlaylistModel } from "./types";

const { Schema, model } = mongoose;

const AlbumImageSchema = new Schema({
  height: { type: Number, required: true },
  url: { type: String, required: true },
  width: { type: Number, required: true },
});

const ArtistSchema = new Schema({
  name: { type: String, required: true },
});

const TrackSchema = new Schema(
  {
    track: {
      album: {
        name: { type: String, required: true },
        images: [AlbumImageSchema],
      },
      artists: [ArtistSchema],
      name: { type: String, required: true },
      preview_url: { type: String, required: false },
    },
  },
  {
    timestamps: false,
  }
);

const PlaylistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    playlist: {
      tracks: [TrackSchema],
      name: { type: String, required: true },
    },
  },
  {
    timestamps: false,
  }
);

export default model<PlaylistDocument, PlaylistModel>(
  "Playlist",
  PlaylistSchema
);
