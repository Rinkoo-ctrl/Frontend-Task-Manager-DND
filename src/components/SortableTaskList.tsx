import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../context/TaskContext";
import TaskItem from "./TaskItem";

interface SortableTaskProps {
  task: Task;
}

const SortableTask: React.FC<SortableTaskProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: "8px",
  };

  // Keep attributes and listeners on the wrapper — but interactive children now stop propagation.
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskItem task={task} />
    </div>
  );
};

const SortableTaskList: React.FC = () => {
  const { tasks, setTasks, filter } = useTasks();

  // Filter tasks for display
  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Find indexes in the full tasks array so overall order is preserved when reordering
    const oldIndex = tasks.findIndex(task => task.id === active.id);
    const newIndex = tasks.findIndex(task => task.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const newTasksOrder = arrayMove(tasks, oldIndex, newIndex);
    setTasks(newTasksOrder);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={filteredTasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
        {filteredTasks.map(task => (
          <SortableTask key={task.id} task={task} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default React.memo(SortableTaskList);
