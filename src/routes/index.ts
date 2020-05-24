import { Router } from 'express';

const routes = Router();

routes.get('/', (r, res) => res.json({ message: 'Hello' }));

export default routes;
