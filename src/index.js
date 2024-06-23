// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './utils/theme';
import { useState } from 'react';

const Root = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [themeName, setThemeName] = useState('Tema Escuro');

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setThemeName('Tema Claro');
    } else {
      setTheme(lightTheme);
      setThemeName('Tema Escuro');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleTheme={toggleTheme} themeName={themeName} />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);