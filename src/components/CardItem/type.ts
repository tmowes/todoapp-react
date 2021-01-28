import { CartItemType } from '../../data/types'

export type CardItemProps = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
}
