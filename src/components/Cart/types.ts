import { CartItemType } from '../../data/types'

export type CartProps = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}
