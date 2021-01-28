import { Button } from '@material-ui/core'
import React, { useMemo } from 'react'
import { formatCurrency } from '../../utils'
import * as S from './styles'

import { CardItemProps } from './type'

const CardItem = ({ item, addToCart }: CardItemProps) => {
  const { id, title, description, image, price, category } = item

  const formatedPrice = useMemo(() => {
    return formatCurrency(price)
  }, [price])

  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Price>{formatedPrice}</S.Price>
      </div>
      <Button onClick={() => addToCart(item)}>add to cart</Button>
    </S.Container>
  )
}

export default CardItem
