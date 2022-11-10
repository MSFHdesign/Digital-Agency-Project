
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home.js'
import Discover from './Pages/discover.js'
import Personalpage from './Pages/Gunvarsplan.js'
import Fejl from './Pages/fejl.js';

import Nav from './components/NavTop/Nav.jsx';
import Searchbar from './components/NavTop/Searchbar.jsx'
function App() {
  return (
        <div className="App">
          <Nav />
          <Searchbar />
          <Routes> 

              <Route path='/' element={<Home/>}/>
              <Route path='/discover' element={<Discover/>}/>
              <Route path='/Personalspace' element={<Personalpage/>}/>
              <Route path='/*' element={<Fejl/>}/>

          </Routes>

        </div>
    );
  }


export default App;
