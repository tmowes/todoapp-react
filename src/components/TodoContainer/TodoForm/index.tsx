import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { TodoFormProps } from './types'

const TodoForm = ({ onSubmit, edit }: TodoFormProps) => {
  const [input, setInput] = useState(edit?.task ?? '')

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      id: Math.floor(Math.random() * 100000),
      task: input,
      isDone: false,
    })
    setInput('')
  }

  const placeholder = edit
    ? `Editar tarefa '${edit.task}'`
    : 'Adicionar uma nova tarefa...'

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          name="text"
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
        <S.Button>
          <S.PlusIcon />
        </S.Button>
      </S.Form>
    </S.Container>
  )
}

export default TodoForm
