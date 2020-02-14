import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchTodos } from '../../../shared/actions/todoActions'

const StyledHome = styled.div`
  color: ${(props) => props.theme.backgroundColour};
`

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
      <StyledHome>
        {todos.map((todo) => {
          return <>{todo.title}</>
        })}
      </StyledHome>
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
