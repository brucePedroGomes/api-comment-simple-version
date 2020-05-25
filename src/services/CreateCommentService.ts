import { getRepository } from 'typeorm';
import Comment from '../models/Comment';
import User from '../models/User';
import AppError from '../erros/AppError';

interface IRequest {
    title: string;
    comment: string;
    user_id: string;
}

class CreateCommentService {
    public async execute({ title, comment, user_id }: IRequest): Promise<Comment> {
        const commentsRepository = getRepository(Comment);
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);

        if (!user) {
            throw new AppError('User id does not exist');
        }

        const comments = commentsRepository.create({
            title,
            comment,
            user_id,
        });

        await commentsRepository.save(comments);

        return comments;
    }
}

export default CreateCommentService;
