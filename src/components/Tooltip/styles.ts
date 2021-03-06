import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    span{
        background-color: #ff9000;
        position: absolute;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: all .4s;
        bottom: calc(100% + 12px);
        width: 160px;
        left: 50%;
        transform: translateX(-50%);
        color: #312e38;
        visibility: hidden;
        &::before{
            content: '';
            top: 100%;
            position: absolute;
            border-style: solid;
            border-color: #ff9000 transparent;
            border-width: 6px 6px 0 6px;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &:hover span{
        opacity: 1;
        visibility: visible;
    }
`
