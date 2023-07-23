import { Router } from "express";

export const commentsRoute = Router();

commentsRoute.get('/', (req, res) => {
    res.json({message: 'Comments are here!'});
});