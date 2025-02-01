import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Reservations from './components/reservations';
import Tour from './components/tour';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
