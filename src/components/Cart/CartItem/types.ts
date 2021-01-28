import { CartItemType } from '../../../data/types'

export type CartItemProps = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}
