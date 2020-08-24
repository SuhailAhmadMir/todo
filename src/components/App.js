import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './ui/Theme'
import QueueIcon from '@material-ui/icons/Queue'

import AddItem from './AddItem'
import TodoList from './TodoList'
import { useStyles } from './ui/AppStyle'
import { Container } from '@material-ui/core'

const App = () => {
  const classes = useStyles()

  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ])

  const addItem = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }
  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleEdit = (index, text) => {
    const newTodos = [...todos]
    const filterTodo = newTodos.filter((todo, i) => (index === i ? todo : ''))
    filterTodo.map((ftodo, i) => (ftodo.text = text))
    newTodos.map((ntodo, i) => (i === index ? (ntodo = filterTodo) : ntodo))
    setTodos(newTodos)
  }

  const handleComplete = (index) => {
    const newTodos = [...todos]
    // eslint-disable-next-line
    newTodos.map((todo, i) => {
      if (i === index) {
        if (todo.isCompleted === true) {
          todo.isCompleted = false
        } else {
          todo.isCompleted = true
        }
      }
    })
    setTodos(newTodos)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.appContainer}>
        <QueueIcon className={classes.listIcon} />
        <h1 className={classes.mainHeading}> Todo App</h1>
      </Container>

      <AddItem addItem={addItem} />
      <TodoList
        items={todos}
        delete={handleDelete}
        edit={handleEdit}
        complete={handleComplete}
      />
    </ThemeProvider>
  )
}

export default App
