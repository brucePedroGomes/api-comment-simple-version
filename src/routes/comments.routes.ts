import { Router } from 'express';
import { getRepository } from 'typeorm';

import Comment from '../models/Comment';
import CreateCommentService from '../services/CreateCommentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const commentsRouter = Router();

commentsRouter.post('/', ensureAuthenticated, async (req, res) => {
    const { title, comment } = req.body;
    const createCommentService = new CreateCommentService();

    const comments = await createCommentService.execute({
        title,
        comment,
        user_id: req.user.id,
    });

    return res.json(comments);
});

commentsRouter.get('/', async (_, res) => {
    const commentsRepository = getRepository(Comment);
    const comments = await commentsRepository.find();

    return res.json(comments);
});

export default commentsRouter;
