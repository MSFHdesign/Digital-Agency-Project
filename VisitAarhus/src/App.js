
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home.js'
import Discover from './Pages/discover.js'
import Personalpage from './Pages/Gunvarsplan.js'
import Fejl from './Pages/fejl.js';

function App() {
  return (
        <div className="App">
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
