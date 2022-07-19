// import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Switch, Routes, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import './App.css';
// import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing'
// import Work from './pages/Work/work'


function App() {
  
  return (
    <section class='body'>
      <div>test</div>
        <HashRouter>
        {/* <BrowserRouter> */}
          <Switch>
            <Route path='/' exact element={<Landing  />} />
            {/* <Route path='/home' element={<Home />} />
            <Route path='/Work' element={<Work />} /> */}
          </Switch>
        {/* </BrowserRouter> */}
        </HashRouter>
    </section>

  );
}

export default App;
