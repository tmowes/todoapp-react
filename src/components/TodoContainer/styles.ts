import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.container};
  `}
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    text-align: center;
  `}
`
