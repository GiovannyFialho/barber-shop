import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ConainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ConainerProps>`
    background-color: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;
    & + div {
        margin-top: 8px;
    }
    ${props => props.isErrored && css`
        border-color: #c53030;
    `}
    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}
    ${props => props.isFilled && css`
        color: #ff9000;
    `}
    input {
        color: #f4ede8;
        flex: 1;
        border: 0;
        background: transparent;
        &::placeholder{
            color: #666360;
        }
    }
    svg {
        margin-right: 16px;
    }
`

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg{
        margin: 0;
    }
    span{
        background-color: #c53030;
        color: #fff;
        &::before{
            border-color: #c53030 transparent;
        }
    }
`