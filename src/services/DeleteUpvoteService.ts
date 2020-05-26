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

        const voteFind = await upvotesRepository.findOne({ where: { comment_id, user_id } });

        if (!voteFind) {
            throw new AppError('you do not have permission');
        }

        await upvotesRepository.delete({ user_id });
    }
}

export default CreateRemoveUpvoteservice;
