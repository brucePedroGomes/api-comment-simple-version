import { Router } from 'express';
import CreateUpvotesService from '../services/CreateUpvotesService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upvotesRouter = Router();

upvotesRouter.post('/', ensureAuthenticated, async (req, res) => {
    const upvotesService = new CreateUpvotesService();

    const { comment_id } = req.body;

    const upvotes = await upvotesService.execute({
        comment_id,
        user_id: req.user.id,
    });

    return res.json(upvotes);
});

export default upvotesRouter;
