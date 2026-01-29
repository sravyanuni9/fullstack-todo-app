const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Full Stack To-Do App Backend Running");
});

// Placeholder APIs
app.get("/tasks", (req, res) => {
  res.json([]);
});

app.post("/tasks", (req, res) => {
  res.json({ message: "Task added (placeholder)" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
