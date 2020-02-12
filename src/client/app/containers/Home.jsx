import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../../shared/actions/todoActions'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  static dataNeeds = [fetchTodos]

  componentDidMount() {
    if (!this.props.todos.length) this.props.fetchTodos()
  }

  render() {
    const { todos } = this.props

    return (
      <>
        {todos.map((todo) => {
          return <>{todo.title}</>
        })}
      </>
    )
  }
}

export default connect(
  (state) => ({
    todos: state.todos.todos,
  }),
  {
    fetchTodos,
  }
)(Home)
