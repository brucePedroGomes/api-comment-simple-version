import { Router } from 'express';
import CommentsRepository from '../repositories/CommentsRepository';

const commentsRouter = Router();

const commentsRepository = new CommentsRepository();


commentsRouter.post('/', (req, res) => {
  const { title, comment } = req.body;

  const comments = commentsRepository.create(title, comment);

  res.json(comments);
});

commentsRouter.get('/', (_, res) => {
  const comments = commentsRepository.all();

  return res.json(comments);
});


export default commentsRouter;
