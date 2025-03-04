import { createContext, useState } from "react";

export const ThemeContext = createContext(); // calling createContext function and creating ThemeContext

export const ThemeProvider = ({ children }) => { //provider for ThemeContext with state and methods we want to export
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};