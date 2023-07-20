import express from 'express';
import bodyParser from 'body-parser';
import todo from './routes/todo.mjs';
import cors from 'cors';


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
