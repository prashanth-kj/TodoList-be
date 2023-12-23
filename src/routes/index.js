import express from 'express';
import todoRoutes from './todo.js'

const router = express.Router();

router.use('/todo',todoRoutes);

export default router;