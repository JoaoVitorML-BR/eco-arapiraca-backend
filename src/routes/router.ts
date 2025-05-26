import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('GET request received at / "Hello, World!"');
    res.send('Hello, World!');
});

export default router;