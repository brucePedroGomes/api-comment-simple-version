import { Router } from 'express';

import commentsRouter from './comments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import upvotesRouter from './upvotes.routes';

const routes = Router();

routes.use('/comments', commentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/upvotes', upvotesRouter);

export default routes;
