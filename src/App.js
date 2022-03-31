import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import './App.css';




function App() {
  return (
    <section>
      <BrowserRouter>
        <div class='scrollPrompt'>
          <p class='scrollText arrowText' to="/" href="/"
          >^</p>
          {/* <p class='scrollText'> SCROLL UP</p> */}
        </div>
        <div>
          <div class='landingContainer circle-leave-active'>
            <div class='landingText'>
              MARC PACAMPARA
            </div>
          </div>
        </div>


        <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
