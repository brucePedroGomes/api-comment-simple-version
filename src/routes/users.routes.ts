import { Router } from 'express';
import CreateUserService from '../services/CreateUsersService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({ name, email, password });

        delete user.password;

        res.json(user);
    } catch (error) {
        res.status(error.statusCode).json({ message: error.message });
    }
});

export default usersRouter;
