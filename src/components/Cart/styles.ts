import styled, { css } from 'styled-components'

export const Container = styled.aside`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 50rem;
    min-height: 100vh;
    padding: 16px;
    color: ${colors.orange};
    background: ${colors.container};
    overflow: auto;
  `}
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    text-align: center;
  `}
`
