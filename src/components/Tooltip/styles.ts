import styled from 'styled-components';
import {Colors} from "../../theme/colors";

interface TooltipProps  {
    color: 'dark' | 'light';
}

export const StyledTooltip = styled.div<TooltipProps>`
    position: absolute;
    background: ${({color}) => color === 'dark' ? Colors.grey700 : Colors.white};
    color: ${({color}) => color === 'dark' ? Colors.white : Colors.grey700};
    opacity: 0.9;
    z-index: 1000;
    opacity: 0;
    height: 30px;
    border-radius: 4px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    transition: ${({theme}) => theme.data.easing};
    box-shadow: ${({theme}) => theme.data.shadowElevation200};
    
    
    &:before{
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;   
    }
`;

export const TooltipRight = styled(StyledTooltip)`
    top: 50%;
    right: -8px;
    transform: translate(120%, -50%);
    
    &:before {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid ${({color}) => color === 'dark' ? Colors.grey700 : Colors.white};
        left: -5px;
        top: 9px;
    }
`;

export const TooltipLeft = styled(StyledTooltip)`
    top: 50%;
    left: -8px;
    transform: translate(-120%, -50%);
    
    &:before {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid ${({color}) => color === 'dark' ? Colors.grey700 : Colors.white};
        right: -5px;
        top: 9px;
    }
`;

export const TooltipTop = styled(StyledTooltip)`
    top: -55px;
    left: 50%;
    transform: translate(-50%, 0%);
    
    &:before {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: ${({color}) => color === 'dark' ? Colors.grey700 : Colors.white} transparent transparent transparent;
    }
`;

export const TooltipBottom = styled(StyledTooltip)`
    bottom: -55px;
    left: 50%;
    transform: translate(-50%, 0%);
    
    &:before {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent ${({color}) => color === 'dark' ? Colors.grey700 : Colors.white} transparent;
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    
    &:hover {
        ${StyledTooltip} {
            opacity: 0.9;
        }
    }
`;

