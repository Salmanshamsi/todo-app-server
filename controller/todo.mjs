import Todo from "../modals/todo.mjs";

const getData = async (req, res) => {
    try {
      const todos = await Todo.find({});
      res.send(todos); 
    } catch (error) {
      console.error("Error getting todos:", error);
      res.status(500).send("Error getting todos");
    }
  };

const setData = async (req, res) => {
    const data = req.body.data;
  
    try {
      if (data !== "") {
        const newTodo = new Todo({ data });
  
        await newTodo.save();
        res.send("Data added");
      } else {
        res.send("Data not added");
      }
    } catch (error) {
      console.error("Error saving todo item:", error);
      res.status(500).send("Error saving todo item");
    }
  };
  
  
const deleteData = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Todo.deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.send("Data deleted successfully");
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error deleting todo item:", error);
    res.status(500).send("Error deleting todo item");
  }
};

const updateData = async (req, res) => {
  const id = req.params.id;
  const upd_data = req.body.data;

  console.log(upd_data + " id : " + id); // Log the update data and id to check if they are received correctly

  try {

    const result = await Todo.updateOne({ _id: id }, { $set: { data: upd_data } });
    
    console.log(upd_data + " id : " + id); 
    console.log(" res :" + result.nModified)

    if (result.nModified === 1) {
      res.send("Update successful");
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error updating todo item:", error); // Log the error to check what went wrong
    res.status(500).send("Error updating todo item");
  }
};

export { getData, setData, deleteData, updateData };
