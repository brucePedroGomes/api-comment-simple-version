import { getRepository } from 'typeorm';
import Upvote from '../models/Upvote';
import AppError from '../erros/AppError';

interface IRequest {
    user_id: string;
    comment_id: string;
}

class CreateUpvotesService {
    public async execute({ user_id, comment_id }: IRequest): Promise<Upvote> {
        const upvotesRepository = getRepository(Upvote);

        const findId = await upvotesRepository.findOne({ where: { user_id, comment_id } });

        if (findId) {
            throw new AppError('limited to one vote per user');
        }

        const register = upvotesRepository.create({ user_id, comment_id });

        await upvotesRepository.save(register);

        return register;
    }
}

export default CreateUpvotesService;
