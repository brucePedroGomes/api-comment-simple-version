import { Router } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const createSessions = new CreateSessionsService();

        const { user } = await createSessions.execute({ email, password });

        delete user.password;

        res.json({ user });
    } catch (error) {
        res.status(error.statusCode).json({ message: error.message });
    }
});

export default sessionsRouter;
