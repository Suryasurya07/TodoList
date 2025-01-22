import React from 'react';
import Sidebar from './Sidebar';

const SidebarWrapper = ({ tasks = [], showImportantTasks, setShowImportantTasks }) => {
  // Fetch the user information from localStorage, assuming it's stored as a JSON string
  const userInfo = localStorage.getItem('user');
  
  // Parse the userInfo string as JSON and extract the username value
  const username = userInfo ? JSON.parse(userInfo).username : 'Guest'; // Defaults to 'Guest' if no user info

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const importantTasks = tasks.filter((task) => task.important);

  return (
    <Sidebar
      user={{ name: username, avatar: 'https://dummyimage.com/150x150/000/fff' }}
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      pendingTasks={pendingTasks}
      importantTasks={importantTasks}
      showImportantTasks={showImportantTasks}
      setShowImportantTasks={setShowImportantTasks}
    />
  );
};

export default SidebarWrapper;
