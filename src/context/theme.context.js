//import dependencies necessary
import React, { createContext, useState } from "react";

const ThemeContext = createContext();

//ThemeContext - storage of the data;
// ThemeContext.Provider - used to set up context providing

//Set up context: set up provider as a component and pass the values you
// you want to share within the value space
//afterwards we have to wrap our application into this context so that the data
// is always acessible
function ThemeProviderWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export { ThemeContext, ThemeProviderWrapper };
