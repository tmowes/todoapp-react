import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 8rem;
    width: 100vw;
    padding: 0 4.8rem;
    background-color: ${colors.background};
  `}
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    text-align: center;
  `}
`
