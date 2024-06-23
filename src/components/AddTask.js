// AddTask.js

import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }

    addTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div>
      <TextField
        label="Título"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Descrição"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Data de Vencimento"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        margin="normal"
      />
      <Stack direction="row" spacing={2} mt={2}>
        <Button onClick={handleAddTask} variant="contained" color="primary">
          Adicionar Tarefa
        </Button>
      </Stack>
    </div>
  );
};

export default AddTask;
