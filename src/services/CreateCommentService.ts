import { getRepository } from 'typeorm';
import Comment from '../models/Comment';

interface IResponse {
    title: string;
    comment: string;
    user_id: string;
}

class CreateCommentService {
    public async execute({ title, comment, user_id }: IResponse): Promise<Comment> {
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
