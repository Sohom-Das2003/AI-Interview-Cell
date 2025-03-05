import React from 'react';
import FigmaDesign from './components/FigmaDesign';
import LoginPage from './pages/LoginPage';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path = '/' element={<LoginPage/>}/>
        <Route path = '/pussy' element={<FigmaDesign/>}/>
      </Routes>
    </div>
  );
}

export default App;

