/* eslint-disable no-shadow */
import { useState } from 'react'
import TodoForm from '../TodoForm'
import { EditTodoType, TodoType } from '../types'
import inicialEdit from './inicialEdit'
import * as S from './styles'
import { TodoItemProps } from './types'

const TodoItem = (props: TodoItemProps) => {
  const { todo, completeTodo, removeTodo, updateTodo } = props
  const { id, task, isDone } = todo
  const [edit, setEdit] = useState<EditTodoType>(inicialEdit)

  const submitUpdate = (updatedTodo: TodoType) => {
    if (edit.editId) {
      updateTodo(edit.editId, updatedTodo)
      setEdit(inicialEdit)
    }
  }

  if (edit.editId) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <S.Container isDone={isDone}>
      <S.Button onClick={() => completeTodo(id)}>{task}</S.Button>
      <S.Actions>
        {!isDone ? (
          <S.ActionsButton
            onClick={() => setEdit({ editId: id, task })}
            disabled={isDone}
          >
            <S.EditIcon />
          </S.ActionsButton>
        ) : (
          <S.ActionsButton onClick={() => removeTodo(id)} disabled={!isDone}>
            <S.DeleteIcon />
          </S.ActionsButton>
        )}
      </S.Actions>
    </S.Container>
  )
}

export default TodoItem
