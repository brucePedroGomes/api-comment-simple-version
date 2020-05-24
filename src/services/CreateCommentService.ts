import { getRepository } from 'typeorm';
import Comment from '../models/Comment';

import AppError from '../erros/AppError';
import ICreateCommentsDTO from '../DTOS/ICreateCommentsDTO';

class CreateCommentService {
    public async execute({
        title,
        comment,
    }: ICreateCommentsDTO): Promise<Comment> {
        const commentsRepository = getRepository(Comment);

        if (!comment || !title) {
            throw new AppError('comment and title are required', 411);
        }

        const comments = commentsRepository.create({
            title,
            comment,
        });

        await commentsRepository.save(comments);

        return comments;
    }
}

export default CreateCommentService;
