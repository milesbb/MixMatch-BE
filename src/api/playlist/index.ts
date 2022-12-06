import express from "express";
import { JwtAuthenticationMiddleware } from "../../lib/auth/jwtAuth";
import PlaylistModel from "./model";
import UsersModel from "../user/model";

const playlistRouter = express.Router();

playlistRouter.post(
  "/",
  JwtAuthenticationMiddleware,
  async (req, res, next) => {
    try {
      const newPlaylist = new PlaylistModel(req.body);

      newPlaylist.save();

      const playlistId = newPlaylist._id;

      await UsersModel.findByIdAndUpdate(req.body.user, {
        $push: { playlists: playlistId },
      });

      res.status(201).send(playlistId);
    } catch (error) {
      next(error);
    }
  }
);

export default playlistRouter;
