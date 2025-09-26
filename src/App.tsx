import TaskForm from "./components/TaskForm";
import SortableTaskList from "./components/SortableTaskList";
import ThemeToggle from "./components/ThemeToggle";
import { useTasks } from "./context/TaskContext";

function App() {
  const { filter, setFilter } = useTasks();

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <ThemeToggle />
      <TaskForm />

      {/* Filter Buttons */}
      <div style={{ margin: "12px 0" }}>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
        <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</button>
        <button onClick={() => setFilter("pending")} disabled={filter === "pending"}>Pending</button>
      </div>

      <SortableTaskList />
    </div>
  );
}

export default App;
