// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Navbar = ({ user, logout, toggleTheme, themeName }) => {
  const handleLogout = async () => {
    await logout();
  };

  // Exemplo de uso da variável auth
  console.log(auth.currentUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Sistema de Tarefas
        </Typography>
        <Button color="inherit" onClick={toggleTheme}>{themeName}</Button>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/tasks">Tarefas</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Registrar</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;