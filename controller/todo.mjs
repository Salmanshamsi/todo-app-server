import { v4 as uuidv4 } from 'uuid';


const todo = [];

const getData = (req, res) => {
    const dataToSend = []; // Accumulate data to send in an array

    for (let i = 0; i < todo.length; i++) {
        dataToSend.push(todo[i]);
    }

    res.send(dataToSend); // Send the array as a single response
}

const setData = (req,res) => {

    const data = req.body.data;
    console.log(data);

    if(data !== ""){
        todo.push({data : data, id : uuidv4()});
        res.send("data added");
    }else{
        res.send("data not added");
    }

}



const deleteData = (req,res) => {

    const id = req.params.id;
    let isFound = false;

    for(let i = 0; i < todo.length; i++ ){
        
        if(id === todo[i].id){
            deleteElement(todo,todo[i]);
            isFound = true;
            break;
        }
    }

    if(isFound){
        res.send("Data deleted Sucessfully");
    }else{
        res.send("Data not deleted ");
    }

}


const deleteElement = (arr,Ele) => {

    
    const index = arr.findIndex(item => Ele === item);
    console.log( "index :" + index , "Element :" + Ele)

     if(index !== -1 ){
            arr.splice(index,1);
     }

}


const updateData = (req,res) => {

    const id = req.params.id;
    const data = req.body.data;
    let isUpdate = false;


    for(let i = 0; i < todo.length; i++){
        if(todo[i].id === id){
            todo[i].data = data;
            isUpdate = true;
            break;
        }
    }

    if(isUpdate){
        res.send("update sucessfully");
    }else{
        res.send(" not update");
    }

    
}


export {getData, setData, deleteData,updateData}