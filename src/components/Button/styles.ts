import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledButton = styled.button`
    height: 45px;
    display: block;
    padding: 0 20px;
    transition: all .1s ease-in;
    outline: none !important;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.data.primary100};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    border-radius: 30px;
    line-height: 3em;
    cursor: pointer;
    
    &:hover {
        box-shadow: ${({theme}) => theme.data.shadowElevation100};
        background: ${({theme}) => theme.data.primary700};
    }
`;

export const StyledLink = styled(Link)`
    height: 45px;
    display: block;
    padding: 0 20px;
    transition: all .1s ease-in;
    outline: none !important;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.data.primary100};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    border-radius: 30px;
    line-height: 3em;
    cursor: pointer;
    text-decoration: none;
    line-height: 45px;
    vertical-align: middle;
    
    &:hover {
        box-shadow: ${({theme}) => theme.data.shadowElevation100};
        background: ${({theme}) => theme.data.primary700};
        text-decoration: none;
    }
`;
