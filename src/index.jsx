import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Gallery } from "./components/Gallery";
import { configureStore } from "./store";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./useDarkMode";

const store = configureStore();

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <footer></footer>
        </>
      </ThemeProvider>

      <Provider store={store}>
        <div className="App">
          <h1>Top 25 Greatest Albums of All Time</h1>
          <Gallery />
        </div>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
