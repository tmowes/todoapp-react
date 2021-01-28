import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import styled, { css } from 'styled-components'
import { ContainerStyle } from './types'

export const Container = styled.div<ContainerStyle>`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38.4rem;
    height: 8rem;
    overflow: hidden;
    background-color: ${colors.black};
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    border-top: 1px solid ${colors.gray};
    border: 2px solid ${`${colors.gray}40`};
    border-top: 0;
    border-bottom: 1px solid ${colors.orange};
  `}
  ${({ isDone, theme: { colors } }) =>
    isDone &&
    css`
      border-left: 1.6rem solid ${colors.green};
      color: ${colors.green};
      text-decoration: line-through;
      opacity: 0.6;
    `}
`

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    font-size: 2.2rem;
    width: 100%;
    color: ${colors.orange};
    background-color: ${colors.black};
  `}
`

export const Actions = styled.div`
  display: flex;
`

export const ActionsButton = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    margin-right: 8px;
    color: ${colors.orange};
    background-color: transparent;
  `}
`

export const EditIcon = styled(TiEdit)`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    width: 32px;
    height: 32px;
  `}
`

export const DeleteIcon = styled(RiCloseCircleLine)`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    width: 32px;
    height: 32px;
  `}
`
