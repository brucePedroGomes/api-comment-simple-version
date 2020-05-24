import { uuid } from 'uuidv4';

class Comments {
    id: string;

    title: string;

    comment: string;

    constructor(title:string, comment:string) {
      this.id = uuid();
      this.title = title;
      this.comment = comment;
    }
}

export default Comments;
