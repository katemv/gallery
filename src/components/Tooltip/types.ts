import {TooltipPosition} from "../../store/Home/HomeTypes";

export interface ComponentProps {
    children: any | any[];
    title: string;
    position?: TooltipPosition;
    color: 'light' | 'dark';
}
