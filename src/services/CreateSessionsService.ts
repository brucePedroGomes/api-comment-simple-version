import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';
import AppError from '../erros/AppError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
}

class CreateSessionsService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: { email },
        });

        if (!user) {
            throw new AppError('Invalid email or password.', 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError('Invalid email or password.', 401);
        }

        return {
            user,
        };
    }
}

export default CreateSessionsService;
