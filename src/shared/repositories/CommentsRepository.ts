
import Comments from '../models/Comments';


class CommentsRepository {
    private comments: Comments[];

    constructor() {
      this.comments = [];
    }

    public create(title:string, comment:string): Comments {
      const comments = new Comments(title, comment);

      this.comments.push(comments);

      return comments;
    }
}

export default CommentsRepository;
