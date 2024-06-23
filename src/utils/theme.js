// utils/theme.js

import { createTheme } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: purple,
    secondary: green,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: purple,
    secondary: green,
  },
});

export { lightTheme, darkTheme };