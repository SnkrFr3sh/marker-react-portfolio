import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing'
import Work from './pages/Work/work'


function App() {
  
  return (
    <section class='body'>

        <BrowserRouter basename='/website'>
          <Routes>
            <Route path='/' element={<Landing />} />
            {/* <Route path='/home' element={<Home />} />
            <Route path='/Work' element={<Work />} /> */}
          </Routes>
        </BrowserRouter>
    </section>

  );
}

export default App;
