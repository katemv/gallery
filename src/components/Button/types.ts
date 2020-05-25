import {HTMLAttributes} from "react";

export enum ButtonType {
    BUTTON,
    LINK
}

export interface ComponentProps extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType,
    to?: string
}
