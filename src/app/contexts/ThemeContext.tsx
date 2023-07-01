import React, { createContext } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider:
