import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/SwapiPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/swapi" element={<SwapiPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;