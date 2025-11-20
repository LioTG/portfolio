import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UltimatePC from './pages/UltimatePC';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg-primary)',
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ultimate-pc-simulator" element={<UltimatePC />} />
      </Routes>
    </div>
  );
}

export default App;
