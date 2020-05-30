import { getRepository } from 'typeorm';

import Upvotes from '../models/Upvote';
import AppError from '../erros/AppError';

interface IRequest {
    user_id: string;
    comment_id: string;
}

class CreateRemoveUpvoteservice {
    public async execute({ user_id, comment_id }: IRequest): Promise<void> {
        const upvotesRepository = getRepository(Upvotes);

        const upvotes = await upvotesRepository.findOne({ where: { comment_id, user_id } });

        if (!upvotes) {
            throw new AppError('You are not the owner of this vote');
        }

        await upvotesRepository.remove(upvotes);
    }
}

export default CreateRemoveUpvoteservice;
