import React, { useState } from 'react';
import './App.css';
import {Navbar, Switch, Themes, Footer, ScrollToTop, Social} from './components';
import {ThemeProvider} from 'styled-components';
import { MainHome } from './pages';

function App() {

  const[theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Navbar />
      <Social />
      <Switch theme={theme} setTheme={setTheme} />
      <MainHome theme={theme} />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
    
  );
}

export default App;
