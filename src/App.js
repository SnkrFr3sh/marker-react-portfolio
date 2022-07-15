import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing'
import Work from './pages/Work/work'


function App() {
  
  return (
    <section class='body'>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            {/* {/* <Route path='/Projects' element={<Projects />} /> */}
            <Route path='/Work' element={<Work />} />
            {/* <Route path='/Aboutme' element={<Aboutme />} /> */} 

          </Routes>
        </BrowserRouter>
    </section>

  );
}

export default App;