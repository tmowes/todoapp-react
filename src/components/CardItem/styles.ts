import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid ${colors.orange};
    border-radius: 16px;
    overflow: hidden;
  `}
`

export const Title = styled.h3`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    font-size: 1.6rem;
    padding: 0 8px;
  `}
`
export const Description = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.grayHard};
    font-size: 1.2rem;
    padding: 0 8px;
  `}
`
export const Price = styled.h3`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    text-align: right;
    font-size: 1.6rem;
    padding: 0 8px;
  `}
`
export const Image = styled.img`
  ${({ theme: { colors } }) => css`
    max-height: 25.6rem;
    object-fit: cover;
  `}
`
