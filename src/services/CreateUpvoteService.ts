import { getRepository } from 'typeorm';
import Upvote from '../models/Upvote';
import AppError from '../erros/AppError';

interface IRequest {
    user_id: string;
    comment_id: string;
}

class CreateUpvotesService {
    public async execute({ user_id, comment_id }: IRequest): Promise<Upvote> {
        const upVotesRepository = getRepository(Upvote);

        const findId = await upVotesRepository.findOne({ where: { user_id, comment_id } });

        if (findId) {
            throw new AppError('limited to one vote per user');
        }

        const register = upVotesRepository.create({ user_id, comment_id });

        await upVotesRepository.save(register);

        return register;
    }
}

export default CreateUpvotesService;
