import axios from 'axios'
import { CartItemType } from '../data/types'

const productsURL = 'https://fakestoreapi.com/products'

const getProducts = async (): Promise<CartItemType[]> => {
  const { data } = await axios.get(productsURL)
  return data
}

export default getProducts
