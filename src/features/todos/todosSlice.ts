import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      title: 'do task 1',
      description: ' Do some cool stuff and be a cool dude',
      priority: 2,
      label: 'University',
      labelColor: '#333',
      id: 1,
    },
    {
      title: 'do task 1',
      description: ' Do some cool stuff and be a cool dude',
      priority: 1,
      label: 'University',
      labelColor: '#333',
      id: 2,
    },
    {
      title: 'do task 1',
      description: ' Do some cool stuff and be a cool dude',
      priority: 4,
      label: 'University',
      labelColor: '#333',
      id: 3,
    },
    {
      title: 'do task 1',
      description: ' Do some cool stuff and be a cool dude',
      priority: 1,
      label: 'University',
      labelColor: '#333',
      id: 4,
    },
  ],
  reducers: {
    getTodos: state => {
      state;
    },
    createTask: () => {},
    deleteTask: () => {},
  },
});

export const {createTask, deleteTask, getTodos} = todoSlice.actions;

export default todoSlice.reducer;
