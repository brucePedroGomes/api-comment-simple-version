import Comments from '../models/Comments';
import ICreateCommentsDTO from '../DTOS/ICreateCommentsDTO';

class CommentsRepository {
    private comments: Comments[];

    constructor() {
        this.comments = [];
    }

    public create({ title, comment }: ICreateCommentsDTO): Comments {
        const comments = new Comments({ comment, title });

        this.comments.push(comments);

        return comments;
    }

    public all(): Comments[] {
        return this.comments;
    }
}

export default CommentsRepository;
