import React, { useState, useEffect } from 'react'

import { Card, Col, Icon, Result, Row } from 'antd'

import TodoService from 'services/TodoService'

const Todos = () => {
  const [error, setError] = useState(false)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    TodoService.getTodos({ setTodos, setError })
  }, [])

  if (error) {
    return <Result status="warning" title="Error" subTitle={error} />
  }

  if (!todos || todos.length === 0) {
    return (
      <div>
        <Icon type="loading" /> Loading...
      </div>
    )
  }

  return (
    <div>
      <h1>All Todos ({todos.length})</h1>
      <Row>
        {todos.map(todo => (
          <Col key={todo.id}>
            <Card title={todo.name}>
              <p>{todo.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Todos
