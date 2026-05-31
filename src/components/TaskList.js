import React, { useState } from "react";
import TaskCard from "./TaskCard";

const FILTERS = ["all", "todo", "in-progress", "done"];

export default function TaskList({ tasks, onDelete, onStatusChange }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div>
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All" : f === "in-progress" ? "In Progress" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">📭</div>
          <p>No tasks here. Add one above!</p>
        </div>
      ) : (
        <div className="task-list">
          {filtered.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}