import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/index'
import Projects from './pages/Projects/projects'

function App() {
  
  return (
    <section class='body'>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>
    </section>

  );
}

export default App;
