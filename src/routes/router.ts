import { Router, RequestHandler } from 'express';
import { UserHttpController } from '../User/Controller/httpController';

const router = Router();
const userHttpController = new UserHttpController();

router.get('/', (req, res) => {
    console.log('GET request received at / "Hello, World!"');
    res.send('Hello, World!');
});

router.post('/user', userHttpController.create);

export default router;