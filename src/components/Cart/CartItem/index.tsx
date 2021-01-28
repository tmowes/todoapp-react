import * as S from './styles'
import { CartItemProps } from './types'

const CartItem = ({ item, addToCart, removeFromCart }: CartItemProps) => {
  const { id, title, price, amount, image } = item
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Row>
          <S.Info>{price}</S.Info>
          <S.Info>{price * amount}</S.Info>
        </S.Row>
        <S.Row>
          <S.CartButton onClick={() => removeFromCart(id)}>-</S.CartButton>
          <S.Info>{amount}</S.Info>
          <S.CartButton onClick={() => addToCart(item)}>+</S.CartButton>
        </S.Row>
      </S.Content>
      <S.Image src={image} alt={title} />
    </S.Container>
  )
}

export default CartItem
