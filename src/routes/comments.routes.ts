import { Router } from 'express';
import { getRepository } from 'typeorm';

import Comment from '../models/Comment';
import CreateCommentService from '../services/CreateCommentService';

const commentsRouter = Router();

commentsRouter.post('/', async (req, res) => {
    try {
        const { title, comment, user_id } = req.body;

        const createCommentService = new CreateCommentService();

        const comments = await createCommentService.execute({ title, comment, user_id });

        res.json(comments);
    } catch (error) {
        res.status(error.statusCode).json(error.message);
    }
});

commentsRouter.get('/', async (_, res) => {
    const commentsRepository = getRepository(Comment);
    const comments = await commentsRepository.find();

    return res.json(comments);
});

export default commentsRouter;
