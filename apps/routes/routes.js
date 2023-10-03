import express  from 'express';
import AuthController from ''


const router = express.Router();

router.post('/api/auth/signup', AuthController.signup);
router.post('/api/auth/login', AuthController.login);

export default router;

