import express from 'express';
import todoController from '../controller/todoController.js';

 const router =express.Router();
   
 router.post('/create',todoController.createTodo);
 router.get('/get' , todoController.getTodo);
 router.put('/update/:id', todoController.handleCheckbox)
 router.delete('/delete/:id',todoController.handleDelete)
 
export default router; 

