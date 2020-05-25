import { getRepository } from 'typeorm';
import Comment from '../models/Comment';

import ICreateCommentsDTO from '../DTOS/ICreateCommentsDTO';

class CreateCommentService {
    public async execute({ title, comment, user_id }: ICreateCommentsDTO): Promise<Comment> {
        const commentsRepository = getRepository(Comment);

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
