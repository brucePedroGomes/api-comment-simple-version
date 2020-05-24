import { getRepository } from 'typeorm';
import Comments from '../models/Comments';

import AppError from '../erros/AppError';
import ICreateCommentsDTO from '../DTOS/ICreateCommentsDTO';

class CreateCommentService {
    public async execute({
        title,
        comment,
    }: ICreateCommentsDTO): Promise<Comments> {
        const commentsRepository = getRepository(Comments);

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
