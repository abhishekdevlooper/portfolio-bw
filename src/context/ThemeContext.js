import React, { createContext, useState, useEffect } from "react";

// Create Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the saved theme from localStorage (if available)
  const storedTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(storedTheme);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference
  };

  useEffect(() => {
    document.body.className = theme; // Apply theme to the entire page
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
