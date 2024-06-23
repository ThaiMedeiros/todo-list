// HomePage.js
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Modal, TextField } from '@mui/material';
import TaskList from '../components/TaskList';

const HomePage = ({ user }) => {
  const [tasks, setTasks] = useState(() => {
    if (user) {
      const savedTasks = localStorage.getItem(`tasks_${user.uid}`);
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(`tasks_${user.uid}`, JSON.stringify(tasks));
    }
  }, [tasks, user]);

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');

  const openAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const closeAddTaskModal = () => {
    setShowAddTaskModal(false);
    // Limpar campos ao fechar o modal
    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskDueDate('');
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      userId: user.uid,
      title: newTaskTitle,
      description: newTaskDescription,
      dueDate: newTaskDueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    closeAddTaskModal();
  };

  if (!user) {
    return <Typography variant="h6">Carregando...</Typography>;
  }

  // Filtrar tarefas para exibir apenas as do usuário atual
  const filteredTasks = tasks.filter(task => task.userId === user.uid);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Tarefas
        </Typography>

        <Button onClick={openAddTaskModal} variant="contained" color="primary" sx={{ mb: 2 }}>
          Adicionar Tarefa
        </Button>

        <TaskList tasks={filteredTasks} setTasks={setTasks} />

        {/* Modal para adicionar tarefa */}
        <Modal
          open={showAddTaskModal}
          onClose={closeAddTaskModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
              Adicionar Tarefa
            </Typography>
            <TextField
              label="Título"
              fullWidth
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Descrição"
              fullWidth
              multiline
              rows={4}
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Data de Vencimento"
              type="date"
              value={newTaskDueDate}
              onChange={(e) => setNewTaskDueDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
            />
            <Button onClick={addTask} variant="contained" color="primary" sx={{ mt: 2 }}>
              Adicionar
            </Button>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default HomePage;
