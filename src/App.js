import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = "/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API);
      setTasks(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  // Add task
  const handleAdd = async (form) => {
    try {
      const { data } = await axios.post(API, form);
      setTasks([data, ...tasks]);
    } catch (err) {
      alert("Error adding task");
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      alert("Error deleting task");
    }
  };

  // Update task status
  const handleStatusChange = async (id, status) => {
    try {
      const { data } = await axios.put(`${API}/${id}`, { status });
      setTasks(tasks.map((t) => (t._id === id ? data : t)));
    } catch (err) {
      alert("Error updating task");
    }
  };

  // Stats
  const total     = tasks.length;
  const todo      = tasks.filter((t) => t.status === "todo").length;
  const progress  = tasks.filter((t) => t.status === "in-progress").length;
  const done      = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="app">
      <div className="app-header">
        <h1>Task Manager</h1>
        <p>Stay organised. Ship faster.</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-box">
          <div className="stat-num">{total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat-box">
          <div className="stat-num" style={{ color: "var(--todo)" }}>{todo}</div>
          <div className="stat-label">To Do</div>
        </div>
        <div className="stat-box">
          <div className="stat-num" style={{ color: "var(--progress)" }}>{progress}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-box">
          <div className="stat-num" style={{ color: "var(--done)" }}>{done}</div>
          <div className="stat-label">Done</div>
        </div>
      </div>

      <TaskForm onAdd={handleAdd} />

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading tasks...</p>
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}