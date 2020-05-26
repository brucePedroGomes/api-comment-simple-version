import { getRepository } from 'typeorm';
import Comment from '../models/Comment';
import Upvotes from '../models/Upvotes';
import AppError from '../erros/AppError';

interface IRequest {
    user_id: string;
    comment_id: string;
}

class CreateUpvotesService {
    public async execute({ user_id, comment_id }: IRequest): Promise<Upvotes> {
        if (!user_id) {
            throw new AppError('user not found');
        }

        const commentsRepository = getRepository(Comment);

        const commnet = await commentsRepository.findOne({
            where: { id: comment_id },
        });

        console.log(commnet);

        if (!commnet) {
            throw new AppError('comment not found');
        }

        const upvotesRepository = getRepository(Upvotes);

        const register = upvotesRepository.create({ user_id, comment_id });

        await upvotesRepository.save(register);

        return register;
    }
}

export default CreateUpvotesService;
