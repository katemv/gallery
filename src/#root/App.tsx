import * as React from 'react';
import RootPage from '../navigation/RootPage';
import { ThemeProvider } from '../theme/ThemeContext';
import {HomeProvider} from "../providers/HomeProvider";

function App() {
  return (
    <ThemeProvider>
        <HomeProvider>
            <RootPage />
        </HomeProvider>
    </ThemeProvider>
  );
}

export default App;
