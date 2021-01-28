export type TodoType = {
  id: number
  task: string
  isDone?: boolean
}

export type EditTodoType = {
  editId: null | number
  task: string
}

export type TodosType = {
  todos: TodoType[]
}
