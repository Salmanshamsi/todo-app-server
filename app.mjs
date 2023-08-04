import express from 'express';
import bodyParser from 'body-parser';
import todo from './routes/todo.mjs';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';



const app = express();
const port = process.env.PORT ||  3000;
config()
const uri = process.env.MONGODB_URI;


app.set('trust proxy', true);
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

mongoose.connect(uri,{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected sucessfully !");
}).catch((err)=>{
    console.log("connection Error : !" + err);
})



app.use((req, res, next) => {
        next(); 
});


app.use("/todo", todo);

app.listen(port, () => {
    console.log("Server started");
});

