import express from 'express';
import { getData, setData ,deleteData, updateData} from '../controller/todo.mjs';

const routes = express.Router();


routes.get("/",(req,res)=>{
    getData(req,res);
})

routes.post("/",(req,res)=>{
    setData(req,res);
})

routes.delete("/:id",(req,res)=>{
    deleteData(req,res);
})

routes.patch("/:id",(req,res)=>{
    updateData(req,res);
})



export default routes;
