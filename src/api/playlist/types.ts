import { Model, ObjectId } from "mongoose";
import { User } from "../user/types";

export interface AlbumImage {
  height: number;
  url: string;
  width: number;
}
export interface Artist {
  name: string;
}
export interface Track {
  track: {
    album: {
      name: string;
      images: AlbumImage[];
    };
    artists: Artist[];
    name: string;
    preview_url: string;
  };
}

export interface Playlist {
  user: ObjectId[];
  playlist: {
    tracks: Track[];
    name: string;
  };
}

export interface PlaylistDocument extends Playlist, Document {}

export interface PlaylistModel extends Model<PlaylistDocument> {}
