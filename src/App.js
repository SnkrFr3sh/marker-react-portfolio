import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import './App.css';
import Landing from './pages/Landing/Landing'


function App() {
  
  return (
    <section class='body'>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Landing  />} />
            {/* <Route path='/home' element={<Home />} />
            <Route path='/Work' element={<Work />} /> */}
          </Routes>
        </BrowserRouter>
    </section>

  );
}

export default App;
