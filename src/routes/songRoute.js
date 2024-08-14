import { addsong,listSong } from "../controllers/songsController.js";
import express from 'express'

const songRouter =express.Router();

songRouter.post('/add',addsong);
songRouter.get('/list',listSong);

export default songRouter;