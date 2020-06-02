import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import AppError from '../errors/AppError';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const usersRepository = getRepository(User);

        const findEmail = await usersRepository.findOne({
            where: { email },
        });

        if (findEmail) {
            throw new AppError('Email already used');
        }

        const hashPassword = await hash(password, 6);

        const user = usersRepository.create({ name, email, password: hashPassword });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
