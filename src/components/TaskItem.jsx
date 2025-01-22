import React from "react";
import Card from "../components/ui/Card.jsx";

const TaskItem = ({ task, toggleTaskComplete, toggleTaskImportance, deleteTask }) => {
  const getPriorityStyle = () => {
    switch (task.priority) {
      case "High":
        return "border-red-500";
      case "Medium":
        return "border-yellow-500";
      case "Low":
        return "border-green-500";
      default:
        return "border-gray-300"; // Fallback style
    }
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <Card
      className={`mb-4 border-l-4 ${getPriorityStyle()} bg-white dark:bg-gray-800 dark:border-gray-600`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskComplete(task.id)}
              className="mr-3 w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-0 dark:border-gray-600"
              aria-label="Mark task complete"
            />
            <h3
              className={`text-lg ${
                task.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {task.title}
            </h3>
          </div>
          {task.dueDate && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Due: {task.dueDate}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <svg
            onClick={() => toggleTaskImportance(task.id)}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 cursor-pointer ${
              task.important
                ? "text-yellow-500"
                : "text-gray-400 dark:text-gray-500"
            }`}
            fill={task.important ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            role="button"
            aria-label={`Mark task as ${task.important ? "not important" : "important"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.004 6.16a1 1 0 00.95.69h6.462c.969 0 1.371 1.24.588 1.81l-5.228 3.748a1 1 0 00-.364 1.118l2.004 6.16c.3.921-.755 1.688-1.54 1.118l-5.228-3.748a1 1 0 00-1.176 0l-5.228 3.748c-.784.57-1.84-.197-1.54-1.118l2.004-6.16a1 1 0 00-.364-1.118L2.589 11.587c-.784-.57-.38-1.81.588-1.81h6.462a1 1 0 00.95-.69l2.004-6.16z"
            />
          </svg>
          <button
            onClick={confirmDelete}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
            aria-label={`Delete task"${task.title}"`}
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
