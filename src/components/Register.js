import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Registro bem-sucedido, redirecionar ou realizar ações adicionais aqui
      console.log('Novo usuário criado:', userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registrar Nova Conta
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            type="password"
            label="Senha"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
          {error && <p>{error}</p>}
        </form>
      </Box>
    </Container>
  );
};

export default Register;
