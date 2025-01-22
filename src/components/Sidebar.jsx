import React, { useEffect, useState } from "react";
import { Book, Calendar, Star, Users } from "lucide-react";
import { useSelector } from "react-redux"; // Import useSelector
import Card from "../components/ui/Card.jsx";

const Sidebar = ({ showImportantTasks, setShowImportantTasks }) => {
  const [name, setName] = useState("Guest"); // Default name if not found

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");

    // If user data exists, extract the username
    if (userData) {
      const userObject = JSON.parse(userData); // Assuming the user data is stored as JSON
      setName(userObject.username || "Guest");
    }
  }, []); // Empty dependency array to run this effect only once

  // Access tasks from Redux state
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const importantTasks = tasks.filter((task) => task.important).length;

  return (
    <div className="col-span-3">
      {/* User Info */}
      <Card className="p-4 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md rounded-lg">
        <div className="flex items-center space-x-3 mb-6 bg-gradient-to-r from-blue-200 to-green-200 dark:from-gray-700 dark:to-gray-600 p-3 rounded-lg">
          <img
            src="default-avatar.png"
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-blue-500 dark:border-green-500"
          />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Hey,</div>
            <div className="font-semibold text-blue-700 dark:text-green-400">{name}</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-3 p-2 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-600">
            <Book className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            <span>All Tasks</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 rounded-lg bg-green-50 text-green-600 dark:bg-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-600">
            <Calendar className="w-5 h-5 text-green-500 dark:text-green-300" />
            <span>Today</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 rounded-lg bg-yellow-50 text-yellow-600 dark:bg-yellow-700 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-600">
            <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
            <span>Important ({importantTasks.length})</span> {/* Show the count of important tasks */}
          </button>
          <button className="w-full flex items-center space-x-3 p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-600">
            <Users className="w-5 h-5 text-purple-500 dark:text-purple-300" />
            <span>Assigned to me</span>
          </button>
        </nav>

        {/* Tasks Summary */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Today's Tasks
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {totalTasks > 0 ? totalTasks : "No tasks available"}
          </div>

          {/* Circular Progress Bar */}
          {totalTasks > 0 && (
            <div className="relative h-32 w-32 mx-auto">
              <svg className="transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="10"
                  strokeDasharray={`${(completedTasks / totalTasks) * 283 || 0} 283`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}

          {/* Task Stats */}
          <div className="mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Completed ({completedTasks})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Pending ({pendingTasks})
              </span>
            </div>
          </div>
        </div>

        {/* Important Tasks */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-800 rounded-lg shadow-inner">
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Important Tasks
          </div>
          <div>
            {importantTasks > 0 ? (
              tasks
                .filter((task) => task.important)
                .map((task) => (
                  <div key={task.id} className="mb-2 text-gray-800 dark:text-gray-100">
                    {task.title}
                  </div>
                ))
            ) : (
              <div className="text-gray-600 dark:text-gray-400">No important tasks</div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
