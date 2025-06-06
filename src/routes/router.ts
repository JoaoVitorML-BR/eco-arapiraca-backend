import { Router } from 'express';
import { UserHttpController } from '../User/Controller/httpController';
import { EcoPointHttpController } from '../Ecopoint/Controller/httpController';

const router = Router();
const userHttpController = new UserHttpController();
const ecoPointHttpController = new EcoPointHttpController();

router.get('/', (req, res) => {
    console.log('GET request received at / "Hello, World!"');
    res.send('Hello, World!');
});

router.post('/user', userHttpController.create);
router.put('/user/:id', userHttpController.update.bind(userHttpController));

// EcoPoint routes
router.post('/ecopoint', ecoPointHttpController.create);

export default router;