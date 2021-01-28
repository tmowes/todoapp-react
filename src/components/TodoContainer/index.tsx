import { useState } from 'react'
import * as S from './styles'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { TodoType } from './types'

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const addTodo = (todo: TodoType) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos)
  }

  const updateTodo = (id: number, updatedTask: TodoType) => {
    if (!updatedTask.task || /^\s*$/.test(updatedTask.task)) {
      return
    }
    setTodos(prev => prev.map(todo => (todo.id === id ? updatedTask : todo)))
  }

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removedArr)
  }

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <S.Container>
      <TodoForm onSubmit={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </S.Container>
  )
}

export default TodoContainer
