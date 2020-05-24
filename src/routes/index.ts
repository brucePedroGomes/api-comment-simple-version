import { Router } from 'express';
import commentsRouter from './comments.routes';

const routes = Router();

routes.get('/', (_, res) => res.json({ message: 'Hello' }));
routes.use('/comments', commentsRouter);

export default routes;
