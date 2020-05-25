import React  from 'react';
import { ComponentProps } from './types';
import { TooltipRight, TooltipLeft, TooltipTop, TooltipBottom, Container } from './styles';
import {TooltipPosition} from "../../store/Home/HomeTypes";

const Tooltip = (props: ComponentProps) => {
    const { children, title, position, color } = props;

    const renderTooltip = () => {
        switch(position) {
            case TooltipPosition.RIGHT:
                return <TooltipRight color={color}>{title}</TooltipRight>;
            case TooltipPosition.LEFT:
                return <TooltipLeft color={color}>{title}</TooltipLeft>;
            case TooltipPosition.TOP:
                return <TooltipTop color={color}>{title}</TooltipTop>;
            case TooltipPosition.BOTTOM:
                return <TooltipBottom color={color}>{title}</TooltipBottom>;
            default:
                return null;
        }
    };

    return (
        <Container>
            {children}
            {renderTooltip()}
        </Container>
    )
};

export default Tooltip;
