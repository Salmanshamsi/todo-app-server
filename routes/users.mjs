import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const routes = express.Router();

const todos = [];

// Get all todos
routes.get("/", (req, res) => {
    res.send(todos);
});

// Create a new todo
routes.post("/", (req, res) => {
    const {data} = req.body;
    const newTodo = { id: uuidv4(), data };
    todos.push(newTodo);
    res.send("Todo successfully added.");
});

// Get a specific todo by ID
routes.get("/:id", (req, res) => {
    const todoId = req.params.id;
    const foundTodo = todos.find((todo) => todo.id === todoId);
    foundTodo ? res.send(foundTodo) : res.send("Todo not found.");
});

// Update a specific todo by ID
routes.put("/:id", (req, res) => {
    const todoId = req.params.id;
    const { title, description } = req.body;
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
        todos[index].title = title;
        todos[index].description = description;
        res.send(`Todo with ID ${todoId} updated successfully.`);
    } else {
        res.send(`Todo with ID ${todoId} not found.`);
    }
});

// Delete a specific todo by ID
routes.delete("/:id", (req, res) => {
    const todoId = req.params.id;
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1);
        res.send(`Todo with ID ${todoId} deleted successfully.`);
    } else {
        res.send(`Todo with ID ${todoId} not found.`);
    }
});

export default routes;
