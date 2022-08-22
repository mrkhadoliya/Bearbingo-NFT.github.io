import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./utils/context";
import {ThemeProvider} from "styled-components"; 
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import Cookies from 'js-cookie';

// PAGES
import Home from "./pages/home";
import Terms from "./pages/terms";
import Mint from "./pages/mint";

// CSS STYLES
import "./assets/styles/reset.css"; 
import "./assets/styles/grid/index.css"; 
import "./assets/styles/animate.css"; 


export default function App() {
  // CHECK IF USER HAS THEM SELECTED ALREADY
  const userTheme = Cookies.get("theme"); 
  const defaultTheme = userTheme || "light"; 
  const [theme, setTheme] = useState(defaultTheme); 

  return (
    <ContextProvider theme={theme}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles /> 
        <Router>
          <Routes>
            {/* <Route path="/" element={<Home setTheme={setTheme} />} /> */}
            <Route path="/" element={<Mint setTheme={setTheme} />} />
            {/* <Route path="/terms" element={<Terms setTheme={setTheme} />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </ContextProvider>
  );
}