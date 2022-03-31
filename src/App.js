import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <section>
    <BrowserRouter>
      <div>
          <div class='landingContainer'>
            <div class='landingText'>
              MARC PACAMPARA
            </div>
          </div>
      </div>

      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </BrowserRouter>
  </section>
  );
}

export default App;
