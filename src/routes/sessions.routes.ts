import { Router } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
    const { email, password } = req.body;
    const createSessions = new CreateSessionsService();

    const { user, token } = await createSessions.execute({ email, password });

    delete user.password;

    res.json({ user, token });
});

export default sessionsRouter;
