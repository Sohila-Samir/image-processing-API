import express, { Router } from 'express';
const router: Router = express.Router();

router.get('/', (_req: express.Request, res: express.Response): void => {
    res.render('home');
}) as Router;

export default router;
