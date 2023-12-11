import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import TextGenPage from "./pages/TextGenPage";
import ImageGenPage from "./pages/ImageGenPage";
import VideoGenPage from "./pages/VideoGenPage";
import MusicGenPage from "./pages/MusicGenPage";
import OpenAI from "openai";
import {type} from "@testing-library/user-event/dist/type";





function App() {

  return (
      <Router>
        <div style={{backgroundColor: "#ffffff"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/textGeneration" element={<TextGenPage />} />
            <Route path="/imageGeneration" element={<ImageGenPage />} />
            <Route path="/musicGeneration" element={<MusicGenPage />} />
            <Route path="/videoGeneration" element={<VideoGenPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
