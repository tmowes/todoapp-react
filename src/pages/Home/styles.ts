import { Button, Drawer } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    /* display: flex; */
    /* flex-direction: column; */
    /* height: 100vh; */
    /* width: 100vw; */
    background-color: ${colors.container};
    margin: 8rem 1.6rem;
  `}
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    text-align: center;
  `}
`
export const CartButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    position: fixed;
    background: ${colors.orange};
    top: 1.6rem;
    right: 6.4rem;
    width: 6.4rem;
    height: 4.8rem;
    z-index: 999;
    &:hover {
      background: ${colors.orangeHover};
    }
  `}
`
export const CartIcon = styled(AddShoppingCart)`
  width: 4rem;
  height: 4rem;
`

export const CustomDrawer = styled(Drawer)`
  ${({ theme: { colors } }) => css`
    color: red;
  `}
`
