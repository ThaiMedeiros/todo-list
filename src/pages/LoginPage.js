import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        localStorage.setItem('userId', user.uid); // Armazena o ID do usuário no localStorage
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error.code, error.message);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (code, message) => {
    switch (code) {
      case 'auth/user-not-found':
        return 'Login ou senha incorretos';
      case 'auth/wrong-password':
        return 'Login ou senha incorretos';
      case 'auth/invalid-email':
        return 'Login ou senha incorretos';
      case 'auth/user-disabled':
        return 'Este usuário foi desativado';
      default:
        return 'Ocorreu um erro. Tente novamente mais tarde.';
    }
  };

  if (auth.currentUser) {
    return <Navigate to="/home" />;
  }

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Senha"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Entrar'}
          </Button>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Ainda não tem uma conta? <Link to="/register">Registrar-se</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
