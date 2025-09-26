import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default React.memo(TaskForm);
