import { createContext, useContext, useState, useEffect, useRef } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const initialTheme = useRef<Theme | null>(null);
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === null) {
      initialTheme.current = Theme.DARK; // or Theme.LIGHT
    } else {
      initialTheme.current = storedTheme as Theme;
    }
  } else {
    initialTheme.current = Theme.DARK; // or Theme.LIGHT
  }
  const [theme, setTheme] = useState<Theme>(initialTheme.current);

  useEffect(() => {
    if (typeof window !== "undefined" && theme !== null) {
      localStorage.setItem("theme", theme as string);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { Theme, ThemeProvider, useTheme };
