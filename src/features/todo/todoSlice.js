import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos : []
}

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers : {
    addTodo : (state,action) => {
      const newItem = {id : nanoid(), text : action.payload}
      state.todos.push(newItem)
    },
    removeTodo : (state,action) => { state.todos = state.todos.filter(k => k.id !== action.payload)},
    updateTodo : (state,action) => {
       let res = state.todos.find( todo => todo.id === action.payload)
       res.text = action.payload
    }
  }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer