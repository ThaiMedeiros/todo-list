// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import Navbar from './components/Navbar';
import { auth } from './utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App = ({ toggleTheme, themeName }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // Estado para indicar carregamento da autenticação

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false); // Marca que a autenticação foi concluída
    });
    return unsubscribe;
  }, []);

  const logout = () => {
    signOut(auth);
  };

  if (authLoading) {
    return <p>Carregando...</p>; // Retorna 'Carregando...' enquanto a autenticação está em andamento
  }

  return (
    <Router>
      <Navbar user={user} logout={logout} toggleTheme={toggleTheme} themeName={themeName} />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/tasks" /> : <WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />
        <Route path="/home" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
