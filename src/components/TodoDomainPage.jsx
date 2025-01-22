import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'; // Import SidebarWrapper
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Weather from '../components/Weather';
import Quote from '../components/Quote';

const TodoDomainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showImportantTasks, setShowImportantTasks] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const addTask = () => {
    if (newTask) {
      const newTaskObj = { id: Date.now(), title: newTask, completed: false, important: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleTaskImportance = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, important: !task.important } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        setSearchQuery={setSearchQuery}
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <Sidebar
              tasks={tasks} // Pass tasks to SidebarWrapper
              showImportantTasks={showImportantTasks}
              setShowImportantTasks={setShowImportantTasks}
            />
          </div>
  
          {/* Main Content */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            {/* Quote and Weather Section */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1 mr-4">
                <Quote />
              </div>
              <div className="w-full sm:w-1/4">
                <Weather />
              </div>
            </div>
  
            {/* Task Input Section */}
            <div className="mb-4">
              <TaskInput newTask={newTask} setNewTask={setNewTask} handleAddTask={addTask} />
            </div>
  
            {/* Task List Section */}
            <div className="flex-grow">
              <TaskList
                tasks={showImportantTasks ? tasks.filter(task => task.important) : tasks}
                toggleTaskComplete={toggleTaskComplete}
                toggleTaskImportance={toggleTaskImportance}
                deleteTask={deleteTask}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default TodoDomainPage;
