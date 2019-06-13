import { Router } from 'express';
import { hasUser } from '../services/userServices';

const router = Router();

router.post('/user-login', (req, res, next) => {
    console.log(req.body.email);
    hasUser(req, res);
})

export default router;