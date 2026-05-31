import React from "react";

const statusLabel = { todo: "To Do", "in-progress": "In Progress", done: "Done" };
const statusClass = { todo: "badge-todo", "in-progress": "badge-progress", done: "badge-done" };
const priorityClass = { low: "badge-low", medium: "badge-medium", high: "badge-high" };

export default function TaskCard({ task, onDelete, onStatusChange }) {
  return (
    <div className="task-card">
      <div className="task-card-body">
        <div className="task-card-header">
          <span className="task-title">{task.title}</span>
          <span className={`badge ${statusClass[task.status]}`}>
            {statusLabel[task.status]}
          </span>
          <span className={`badge ${priorityClass[task.priority]}`}>
            {task.priority}
          </span>
        </div>
        {task.description && (
          <p className="task-desc">{task.description}</p>
        )}
        <div className="task-card-actions">
          <select
            className="status-select"
            value={task.status}
            onChange={(e) => onStatusChange(task._id, e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}