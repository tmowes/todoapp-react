import { Badge, Grid, LinearProgress } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import * as C from '../../components'
import { CartItemType } from '../../data/types'
import { getProducts } from '../../services'
import * as S from './styles'

const Home = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts,
  )
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])

  const getTotalItems = useCallback((items: CartItemType[]) => {
    items.reduce((acc: number, item) => acc + item.amount, 0)
  }, [])

  const addToCart = useCallback((clickedItem: CartItemType) => {
    setCartItems(prevItems => {
      const alreadyInCart = prevItems.find(({ id }) => clickedItem.id === id)
      if (alreadyInCart) {
        return prevItems.map(item =>
          clickedItem.id === item.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        )
      }
      return [...prevItems, { ...clickedItem, amount: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((itemId: number) => {
    setCartItems(prevItems =>
      prevItems.reduce((acc, item) => {
        if (itemId === item.id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        }
        return [...acc, item]
      }, [] as CartItemType[]),
    )
  }, [])

  if (isLoading) return <LinearProgress />

  if (error) return <S.Title>Algo deu errado</S.Title>

  return (
    <S.Container>
      <S.CustomDrawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <C.Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </S.CustomDrawer>
      <S.CartButton onClick={() => setCartOpen(true)}>
        <Badge
          badgeContent={() => getTotalItems(cartItems)}
          color={cartItems.length > 0 ? 'error' : undefined}
        >
          <S.CartIcon />
        </Badge>
      </S.CartButton>
      <Grid container spacing={3}>
        {data &&
          data.length > 0 &&
          data.map(item => (
            <Grid item key={`${item.id}`} xs={12} sm={4}>
              <C.CardItem item={item} addToCart={addToCart} />
            </Grid>
          ))}
      </Grid>
    </S.Container>
  )
}

export default Home
