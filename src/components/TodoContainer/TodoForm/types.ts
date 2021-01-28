import { EditTodoType, TodoType } from '../types'

export type TodoFormProps = {
  onSubmit: (todo: TodoType) => void
  edit?: EditTodoType
}
