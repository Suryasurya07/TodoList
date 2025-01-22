import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

// Helper function to load from local storage
const loadState = () => {
    try {
      const serializedState = localStorage.getItem("tasks");
      const parsedState = serializedState ? JSON.parse(serializedState) : undefined;
      return { tasks: parsedState || [] }; // Ensure it always returns { tasks: [] }
    } catch (err) {
      console.error("Could not load state", err);
      return { tasks: [] }; // Default fallback state
    }
  };
  

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  preloadedState: { tasks: loadState() }, // Load tasks from local storage
});

// Save tasks to local storage on state change
store.subscribe(() => {
    try {
      const state = store.getState();
      const tasks = state.tasks?.tasks || []; // Safeguard against undefined
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Could not save state", err);
    }
  });
  

export default store;
