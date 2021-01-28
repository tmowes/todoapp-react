import { RiAddCircleLine } from 'react-icons/ri'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 38.4rem;
    height: 8rem;
    background-color: ${colors.black};
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    padding: 0.8rem;
    overflow: hidden;
    border-top: 1px solid ${colors.gray};
    border: 2px solid ${`${colors.gray}40`};
    border-top: 0;
    border-bottom: 1px solid ${colors.orange};
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    padding: 0 1.6rem;
    width: 100%;
    border-radius: 0.8rem;
    font-size: 2rem;
    background-color: ${colors.inputs};
    color: ${colors.orange};
  `}
`

export const Button = styled.button`
  margin-left: 8px;
  padding: 8px;
  width: 64px;
  height: 64px;
  background: transparent;
`

export const PlusIcon = styled(RiAddCircleLine)`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    width: 32px;
    height: 32px;
  `}
`
