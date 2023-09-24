import express from 'express';

// import { 
//     Authenticate, 
//     verifyAdmin 
// } from '../middlewares/middleware';

// defining middleware routes
const router = express.Router();

// Users routes
router.post('/api/auth/login', AuthController.login);



export default router;