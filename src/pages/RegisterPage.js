// pages/RegisterPage.js
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Automatically log in the user after registration
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (auth.currentUser) {
    return <Navigate to="/tasks" />;
  }

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registrar
        </Typography>
        <form onSubmit={handleRegister}>
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
            {loading ? <CircularProgress size={24} /> : 'Registrar'}
          </Button>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
