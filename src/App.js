import React, { useState } from 'react';
import './App.css';
import {Navbar, Switch, Themes} from './components';
import {ThemeProvider} from 'styled-components';
import { MainHome } from './pages';

function App() {

  const[theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Navbar />
      <Switch theme={theme} setTheme={setTheme} />
      <MainHome theme={theme} />
    </ThemeProvider>
    
  );
}

export default App;
