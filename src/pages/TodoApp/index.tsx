import * as C from '../../components'
import * as S from './styles'

const TodoApp: React.FC = () => {
  return (
    <S.Container>
      <C.Header />
      <S.Title>TodoApp</S.Title>
      <C.TodoContainer />
    </S.Container>
  )
}

export default TodoApp
