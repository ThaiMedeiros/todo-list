import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
  Button,
  TextField,
  Stack, // Importando Stack do Material-UI
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const TaskItem = ({ task, toggleComplete, updateTask, deleteTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [confirmCompleteDialogOpen, setConfirmCompleteDialogOpen] = useState(false);

  const handleEditToggle = () => {
    if (!task.completed) {
      setEditMode(!editMode);
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  };

  const handleUpdate = () => {
    updateTask(task.id, title, description, dueDate);
    setEditMode(false);
  };

  const handleDelete = () => {
    if (!task.completed) {
      setConfirmDeleteDialogOpen(true);
    }
  };

  const confirmDelete = () => {
    deleteTask(task);
    setConfirmDeleteDialogOpen(false);
  };

  const cancelDelete = () => {
    setConfirmDeleteDialogOpen(false);
  };

  const handleToggleComplete = () => {
    if (!task.completed) {
      setConfirmCompleteDialogOpen(true);
    } else {
      toggleComplete(task);
    }
  };

  const confirmComplete = () => {
    toggleComplete(task);
    setConfirmCompleteDialogOpen(false);
  };

  const cancelComplete = () => {
    setConfirmCompleteDialogOpen(false);
  };

  const renderDescriptionPreview = () => {
    if (task.description.length <= 50) {
      return task.description;
    } else {
      return `${task.description.substring(0, 50)}...`;
    }
  };

  const getStatusText = () => {
    if (task.completed) {
      return 'Concluída';
    } else if (task.dueDate && new Date(task.dueDate) < new Date()) {
      return 'Atrasada';
    } else {
      return 'Aberta';
    }
  };

  const getTaskStatusColor = () => {
    if (task.completed) {
      return { backgroundColor: 'lightblue' };
    } else if (task.dueDate && new Date(task.dueDate) < new Date()) {
      return { backgroundColor: 'lightcoral' };
    } else {
      return { backgroundColor: 'lightgreen' };
    }
  };

  return (
    <>
      <ListItem sx={{ ...getTaskStatusColor(), mb: 2 }}>
        {editMode ? (
          <div style={{ width: '100%' }}>
            <TextField
              label="Título"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              disabled={task.completed}
            />
            <TextField
              label="Descrição"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              disabled={task.completed}
            />
            <TextField
              label="Data de Vencimento"
              type="date"
              value={dueDate || ''}
              onChange={(e) => setDueDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
              disabled={task.completed}
            />
            <Stack direction="row" justifyContent="flex-end" mt={2} spacing={2}>
              <Button onClick={handleUpdate} variant="contained" color="primary">
                Salvar
              </Button>
              <Button onClick={handleEditToggle} variant="contained">
                Cancelar
              </Button>
            </Stack>
          </div>
        ) : (
          <>
            <ListItemText
              primary={task.title}
              secondary={
                <>
                  <Typography variant="body2" component="span" color="textPrimary">
                    {renderDescriptionPreview()}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2" component="span" color="textSecondary">
                      {getStatusText()} - {task.dueDate}
                    </Typography>
                  </Stack>
                </>
              }
              onClick={handleToggleComplete}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={task.completed}
                onChange={handleToggleComplete}
                disabled={task.completed}
              />
              <IconButton edge="end" aria-label="edit" onClick={handleEditToggle}>
                <Edit />
              </IconButton>
              {!task.completed && (
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                  <Delete />
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>

      <Dialog open={confirmDeleteDialogOpen} onClose={cancelDelete}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>Tem certeza de que deseja excluir esta tarefa?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={confirmCompleteDialogOpen} onClose={cancelComplete}>
        <DialogTitle>Confirmar conclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>Deseja marcar esta tarefa como concluída?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelComplete} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmComplete} color="primary" autoFocus>
            Concluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskItem;
