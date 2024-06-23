import React from 'react';
import { Container, Typography } from '@mui/material';

const WelcomePage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" style={{ marginTop: '50px' }}>
        Bem-vindo ao Sistema de Gerenciamento de Tarefas!
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        Faça login ou registre-se para começar a gerenciar suas tarefas.
      </Typography>
    </Container>
  );
};

export default WelcomePage;
