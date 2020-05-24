import Comments from '../models/Comments';
import CommentsRepository from '../repositories/CommentsRepository';
import AppError from '../erros/AppError';

interface IRequest {
    title: string;
    comment: string;
}

class CreateCommentService {
    private commentsRepository: CommentsRepository;

    constructor(commentsRepository: CommentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    public execute({ title, comment }: IRequest): Comments {
        if (!comment || !title) {
            throw new AppError('comment and title are required', 411);
        }

        const comments = this.commentsRepository.create({ title, comment });

        return comments;
    }
}

export default CreateCommentService;
