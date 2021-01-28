import { useCallback, useMemo } from 'react'

import { formatCurrency } from '../../utils'
import { CartProps } from './types'
import CartItem from './CartItem'

import * as S from './styles'

const Cart = ({ cartItems, addToCart, removeFromCart }: CartProps) => {
  const formatedTotalCart = useMemo(() => {
    const calcTotalCart = cartItems.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0,
    )
    return formatCurrency(calcTotalCart)
  }, [cartItems])

  return (
    <S.Container>
      <S.Title>Your Shopping Cart</S.Title>
      {cartItems.length === 0 ? <S.Title>No items in cart.</S.Title> : null}
      {cartItems.map(item => (
        <CartItem
          key={`${item.id}`}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <S.Title>{formatedTotalCart}</S.Title>
    </S.Container>
  )
}

export default Cart
