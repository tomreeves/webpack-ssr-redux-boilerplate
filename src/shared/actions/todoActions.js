import fetch from 'node-fetch'
import TODO_TYPES from '../types/todoTypes'

export function fetchTodos() {
  return async (dispatch) => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((res) => dispatch(setTodos(res)))
        .catch((err) => console.log(err))
    } catch (e) {
      console.error(e)
    }
  }
}

export function setTodos(todos) {
  return {
    type: TODO_TYPES.SET_TODOS,
    todos,
  }
}
