import React from 'react';
import './App.css';
import Articles from './components/Articles';
import Books from './components/Books';
// import Home from './components/Home';
import Influencer from './components/Influencer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/books" element={<Books />} />
        <Route path="/inf" element={<Influencer />} />
      </Routes>
    </div>
  );
}

export default App;
