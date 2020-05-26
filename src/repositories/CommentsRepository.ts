import { Repository, EntityRepository } from 'typeorm';
import Comment from '../models/Comment';

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment> {
    public async fetchCommentsSortedByUpvotes(): Promise<Comment[]> {
        const comments = await this.find({ relations: ['upvotes'] });

        const CommentsSortedByRegistration = comments.sort((a, b) => {
            if (a.upvotes.length < b.upvotes.length) {
                return 1;
            }
            if (a.upvotes.length > b.upvotes.length) {
                return -1;
            }

            return 0;
        });

        return CommentsSortedByRegistration;
    }
}

export default CommentsRepository;
