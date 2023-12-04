import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'


function App() {
  return (
      <Router>
        <div style={{backgroundColor: "#000000"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imageGeneration" element={<Home />} />
            <Route path="/musicGeneration" element={<Home />} />
            <Route path="/videoGeneration" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
