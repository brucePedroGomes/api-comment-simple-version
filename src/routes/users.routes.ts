import { Router } from 'express';
import CreateUserService from '../services/CreateUsersService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    res.json(user);
});

export default usersRouter;
