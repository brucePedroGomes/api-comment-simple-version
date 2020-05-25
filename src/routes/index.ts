import { Router } from 'express';
import commentsRouter from './comments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (_, res) => res.json({ message: 'Hello' }));
routes.use('/comments', commentsRouter);
routes.use('/users', usersRouter);

export default routes;
