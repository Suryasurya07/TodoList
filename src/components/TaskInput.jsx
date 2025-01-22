// src/components/TaskInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput = ({ newTask, setNewTask }) => {
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const addTaskWithPriority = () => {
    dispatch(addTask({ title: newTask, priority, completed: false, important: false, id: Date.now() }));
    setNewTask("");
    setPriority("Low");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">Add A Task</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 bg-white dark:bg-gray-700 border dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2"
          placeholder="Add a new task..."
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={addTaskWithPriority}
          disabled={!newTask.trim()}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
