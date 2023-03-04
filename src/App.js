import React from 'react';
import './App.css';
import Result from './components/Result'
import Searchbar from './components/Searchbar'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    //these are routes
    <Router>
      <Routes>
        <Route path="/" element={<Searchbar/>}/>
        <Route path="/weather/:cityName" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
