import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing'


function App() {
  
  return (
    <section class='body'>
      <div class='test'> this is a test</div>
        {/* <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Landing />} />

          </Routes>
        </BrowserRouter> */}
    </section>
      );
}

export default App;