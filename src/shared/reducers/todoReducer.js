import createReducer from '../createReducer'
import TODO_TYPES from '../types/todoTypes'

const initialState = {
  todos: [],
}

export default createReducer(initialState, {
  [TODO_TYPES.SET_TODOS]: (state, { todos }) => ({
    ...state,
    todos,
  }),
})
