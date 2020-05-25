import React from 'react';
import {StyledButton, StyledLink} from './styles';
import {ComponentProps, ButtonType} from './types';

const Button = (props: ComponentProps) => {
    const { children, onClick, className, type = ButtonType.BUTTON, to = '/' } = props;

    return type === ButtonType.BUTTON ? (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    ) : (
        <StyledLink to={to} className={className}>
            {children}
        </StyledLink>
    )
};

export default Button;
