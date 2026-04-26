const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage
let tasks = [];

// Smart Feature - Auto Priority
const getPriority = (text) => {
    const content = text.toLowerCase();
    if (content.includes("urgent") || content.includes("immediate")) {
        return { level: "high", reason: "Urgent keywords detected." };
    }
    return { level: "low", reason: "Standard task routine." };
};

// 1. POST /tasks 
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const ai = getPriority(title + " " + (description || ""));

    const newTask = {
        id: tasks.length + 1,
        title,
        description: description || "",
        status: "pending",
        suggestedPriority: ai.level,
        aiReasoning: ai.reason
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 2. PATCH /tasks/{id} 
app.patch('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    task.status = "completed";
    res.json(task);
});

// 3. GET /tasks 
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => console.log("Server running on port 3000"));
