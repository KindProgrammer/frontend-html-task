import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { lightTheme, darkTheme } from "./styles/themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from './context/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

library.add(fas);

export default class App extends React.Component{
  static contextType = ThemeContext;

  render () {
      const { theme } = this.context;
      return (
        <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Sidebar color="dark"/>
          <ThemeSwitch/>
        </StyledThemeProvider>
      )
  }
}
