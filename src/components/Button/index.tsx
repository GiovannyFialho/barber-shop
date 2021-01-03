import React, { ButtonHTMLAttributes } from 'react'

import { ButtonComp } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <ButtonComp type="button" {...rest}>
        {children}
    </ButtonComp>
)

export default Button;
