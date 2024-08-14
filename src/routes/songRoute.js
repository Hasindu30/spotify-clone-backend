import { addsong,listSong } from "../controllers/songsController.js";
import express from 'express'
import upload from "../middleware/mulder.js";

const songRouter =express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addsong);
songRouter.get('/list',listSong);

export default songRouter;