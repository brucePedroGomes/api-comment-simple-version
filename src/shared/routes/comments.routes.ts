import { Router } from 'express';
import CommentsRepository from '../repositories/CommentsRepository';

const commentsRepository = new CommentsRepository();

const commentsRouter = Router();

commentsRouter.post('/', (req, res) => {
  const { title, comment } = req.body;

  const comments = commentsRepository.create(title, comment);

  res.json(comments);
});


export default commentsRouter;
