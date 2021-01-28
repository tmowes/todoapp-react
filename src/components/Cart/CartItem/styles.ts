import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Container = styled.aside`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.orange};
    margin-bottom: 16px;
    color: ${colors.orange};
  `}
`

export const Title = styled.h3`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`
export const Info = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`

export const Content = styled.div`
  flex: 1;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Image = styled.img`
  max-width: 80px;
  object-fit: cover;
  margin-left: 40px;
`

export const CartButton = styled(Button).attrs({
  size: 'small',
  disableElevation: true,
  variant: 'contained',
})`
  padding: 16px;
`
