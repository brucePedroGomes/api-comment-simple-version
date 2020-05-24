import { Router } from 'express';

import CommentsRepository from '../repositories/CommentsRepository';
import CreateCommentService from '../services/CreateCommentService';

const commentsRouter = Router();

const commentsRepository = new CommentsRepository();

commentsRouter.post('/', (req, res) => {
    try {
        const { title, comment } = req.body;

        const createCommentService = new CreateCommentService(
            commentsRepository,
        );

        const comments = createCommentService.execute({ title, comment });

        res.json(comments);
    } catch (error) {
        res.status(error.statusCode).json(error.message);
    }
});

commentsRouter.get('/', (_, res) => {
    const comments = commentsRepository.all();

    return res.json(comments);
});

export default commentsRouter;
