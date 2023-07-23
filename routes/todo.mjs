import express from 'express';
import { deleteData, getData, setData, updateData } from '../controller/todo.mjs';


const router = express.Router();


router.get('/', getData);


router.post('/', setData);


router.delete('/:id', deleteData);


router.put('/:id', updateData);

export default router;
