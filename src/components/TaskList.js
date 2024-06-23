import React from 'react';
import { List, Divider } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  const toggleComplete = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const updateTask = (taskId, title, description, dueDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title, description, dueDate } : task
      )
    );
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <React.Fragment key={task.id}>
          <TaskItem
            task={task}
            toggleComplete={toggleComplete}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          {index < tasks.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
