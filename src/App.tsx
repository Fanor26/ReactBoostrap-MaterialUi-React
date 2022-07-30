import React from 'react'
import './App.css';
import  { Buttons } from './components/buttons/Buttons'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Autocompletes } from './components/autocompletes/Autocompletes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autocomplete" element={<Autocompletes />} />
        <Route path="/button" element={<Buttons />} />
        </Routes>
    </Router>
  );
}

export default App;
