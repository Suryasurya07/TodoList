import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskComplete, toggleTaskImportance, deleteTask } from '../redux/taskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks?.tasks || []);
  const dispatch = useDispatch();

  const toggleComplete = (taskId) => dispatch(toggleTaskComplete(taskId));
  const toggleImportance = (taskId) => dispatch(toggleTaskImportance(taskId));
  const deleteTaskById = (taskId) => dispatch(deleteTask(taskId));

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Incomplete Tasks</h2>
        {incompleteTasks.length === 0 ? (
          <p className="text-gray-500">No incomplete tasks to display.</p>
        ) : (
          <div className="space-y-4">
            {incompleteTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskComplete={toggleComplete}
                toggleTaskImportance={toggleImportance}
                deleteTask={deleteTaskById}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <p className="text-gray-500">No completed tasks to display.</p>
        ) : (
          <div className="space-y-4">
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskComplete={toggleComplete}
                toggleTaskImportance={toggleImportance}
                deleteTask={deleteTaskById}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
