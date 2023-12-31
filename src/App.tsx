import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import HomePage from './pages/HomePage';
import AddRiders from './pages/Competition/Bottom/AddRiders'
import TimerFunction from './components/TimerFunction';
import DisplayRiders from './pages/Competition/Bottom/DisplayRiders';
import Competition from './pages/Competition/CompetitionPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/timer" element={<TimerFunction />} />
        <Route path="/addriders" element={<AddRiders />} />
        <Route path="/displayriders" element={<DisplayRiders />} />
        <Route path="/" element={<Competition />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
