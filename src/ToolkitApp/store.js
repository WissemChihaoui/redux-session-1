// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Features/todoSlice'; // Import the todo slice

// Set up the Redux store with the todo reducer
const store = configureStore({
  reducer: {
    todos: todoReducer, // Include the todo slice
  },
});

export default store;
