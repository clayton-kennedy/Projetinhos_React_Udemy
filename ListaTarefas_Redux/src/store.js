import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        todos: ToDoReducer
    },
})



