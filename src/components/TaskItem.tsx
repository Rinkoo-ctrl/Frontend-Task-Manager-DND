import React from "react";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../context/TaskContext";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* prevent the drag listeners from swallowing pointer events */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        onPointerDown={(e) => e.stopPropagation()} // <-- important
      />
      <span>{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        onPointerDown={(e) => e.stopPropagation()} // <-- important
        aria-label={`Delete ${task.text}`}
      >
        ❌
      </button>
    </div>
  );
};

export default React.memo(TaskItem);
