import React from 'react';

const TaskStats = ({ totalTasks, completedTasks, pendingTasks }) => {
  return (
    <div className="mt-6">
      <div className="text-sm font-semibold mb-2">Today Tasks</div>
      <div className="text-2xl font-bold mb-4">{totalTasks}</div>
      <div className="relative h-32 w-32">
        <svg className="transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#22C55E"
            strokeWidth="10"
            strokeDasharray={`${(completedTasks / totalTasks) * 283} 283`}
          />
        </svg>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Completed ({completedTasks})</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span>Pending ({pendingTasks})</span>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
