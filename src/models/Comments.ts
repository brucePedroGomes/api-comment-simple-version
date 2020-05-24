import { uuid } from 'uuidv4';

class Comments {
    id: string;

    title: string;

    comment: string;

    constructor({ title, comment }: Omit<Comments, 'id'>) {
        this.id = uuid();
        this.title = title;
        this.comment = comment;
    }
}

export default Comments;
