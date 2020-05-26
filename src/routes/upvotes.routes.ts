import { Router } from 'express';

import CreateUpvoteService from '../services/CreateUpvoteService';
import DeleteUpvoteService from '../services/DeleteUpvoteService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const UpvotesRouter = Router();

UpvotesRouter.post('/', ensureAuthenticated, async (req, res) => {
    const UpvoteService = new CreateUpvoteService();
    const { comment_id } = req.body;

    const Upvotes = await UpvoteService.execute({
        comment_id,
        user_id: req.user.id,
    });

    return res.json(Upvotes);
});

UpvotesRouter.delete('/delete', ensureAuthenticated, async (req, res) => {
    const UpvoteService = new DeleteUpvoteService();

    const { comment_id } = req.body;

    await UpvoteService.execute({ comment_id, user_id: req.user.id });

    return res.status(200).json();
});

export default UpvotesRouter;
