
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home.js'
import Discover from './Pages/discover.js'
import Personalpage from './Pages/Gunvarsplan.js'
import Fejl from './Pages/fejl.js';


// Componenter 
import LogoTop from './components/LogoTop/LogoTop' 
import Nav from './components/NavTop/Nav'
import Searchbar from './components/NavTop/Searchbar.jsx'


function App() {
  return (
        <div className="App">
          <div className='HeaderTop Flexbox dirRow'>
        
            <LogoTop/> <Nav/> 
          </div>
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
