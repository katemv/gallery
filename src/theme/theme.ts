import theme from 'styled-theming';
import {Colors} from "./colors";

export const customTheme = {
    primary100: theme('mode', {
        dark: Colors.grey100,
        light: Colors.grey700
    }),
    primary200: theme('mode', {
        dark: Colors.grey200
    }),
    primary300: theme('mode', {
        dark: Colors.grey300
    }),
    primary400: theme('mode', {
        dark: Colors.grey400
    }),
    primary500: theme('mode', {
        dark: Colors.grey500
    }),
    primary600: theme('mode', {
        dark: Colors.grey600
    }),
    primary700: theme('mode', {
        dark: Colors.grey700,
        light: Colors.grey100
    }),
    primary800: theme('mode', {
        dark: Colors.grey800,
        light: Colors.white
    }),
    primary900: theme('mode', {
        dark: Colors.grey900
    }),
    accent: theme('mode', {
        dark: Colors.blue,
        light: Colors.pink
    }),
    font: theme('mode', {
        dark: '\'Spartan\', sans-serif'
    }),
    textContrast: theme('mode', {
        dark: Colors.white,
        light: Colors.grey900
    }),
    shadowElevation100: theme('mode', {
        dark: '2px 4px 4px rgba(0,0,0,0.2)',
        light: '2px 4px 4px rgba(116, 137, 185,0.2)'
    }),
    shadowElevation200: theme('mode', {
        dark: '0 4px 15px rgba(0,0,0,0.3)',
        light: '0 4px 15px rgba(116, 137, 185,0.3)',
    }),
    shadowElevation300: theme('mode', {
        dark: '0 4px 30px rgba(0,0,0,0.5)',
        light: '0 4px 30px rgba(116, 137, 185,0.5)'
    }),
    easing: theme('mode', {
        dark: '0.1s cubic-bezier(.17,.67,.83,.67)',
        light: '0.1s cubic-bezier(.17,.67,.83,.67)'
    }),
}
