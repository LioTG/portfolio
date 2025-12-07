import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UltimatePC from './pages/UltimatePC';
import UrbanSafe from './pages/UrbanSafe';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg-primary)',
    }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ultimate-pc-simulator" element={<UltimatePC />} />
        <Route path="/projects/urban-safe" element={<UrbanSafe />} />
      </Routes>
    </div>
  );
}

export default App;
