import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { customTheme } from './theme';
import {string} from "prop-types";

interface ProviderProps {
    children: React.ReactElement<any> | null
}

const ThemeToggleContext = React.createContext({
    toggle: () => {},
    mode: 'dark'
});

export const useTheme =
    () => React.useContext(ThemeToggleContext);

export const ThemeProvider = (props: ProviderProps ) => {
    const {children} = props;

    const [themeState, setThemeState] = React.useState({ mode: 'dark' });

    const toggle = () => {
        const mode = (themeState.mode === 'light' ? `dark` : `light`);

        setThemeState({ mode: mode });
    };

    return (
        <ThemeToggleContext.Provider
            value={{ toggle: toggle, mode: themeState.mode }}
        >
            <StyledThemeProvider
                theme={{
                    mode: themeState.mode,
                    data: customTheme
                }}
            >
                <>
                    {children}
                </>
            </StyledThemeProvider>
        </ThemeToggleContext.Provider>
    );
}

export default ThemeProvider;
