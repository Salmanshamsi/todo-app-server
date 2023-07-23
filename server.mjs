import express from 'express';
import bodyParser from 'body-parser';
import todo from './routes/todo.mjs';
import cors from 'cors';
import mongoose from 'mongoose';


const URI = "mongodb+srv://shamsisalman81:karachi@cluster0.feclegf.mongodb.net/todo-app?retryWrites=true&w=majority";


mongoose.connect(URI,{
    useNewUrlParser : true,
}).then(()=>{
    console.log("connected sucessfully !");
}).catch((err)=>{
    console.log("connection Error : !" + err);
})


const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

app.use((req, res, next) => {
        next(); 
});


app.use("/todo", todo);

app.listen(port, () => {
    console.log("Server started");
});

