import { Router } from 'express';

import commentsRouter from './comments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.get('/', (_, res) => res.json({ message: 'Hello' }));
routes.use('/comments', commentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
