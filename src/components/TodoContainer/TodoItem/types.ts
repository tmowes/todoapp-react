import { TodoType } from '../types'

export type TodoItemProps = {
  todo: TodoType
  completeTodo: (id: number) => void
  removeTodo: (id: number) => void
  updateTodo: (id: number, updatedTask: TodoType) => void
}

export type ContainerStyle = {
  isDone: boolean | undefined
}
