import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home.js'
import Discover from './Pages/discover.js'
import Personalpage from './Pages/Gunvarsplan.js'
import Fejl from './Pages/fejl.js';
import DeleteTrip from './Pages/deleteTrip.js';
import PlanTrip from './Pages/planTrip.js';

// Componenter 
import LogoTop from './components/LogoTop/LogoTop' 
import Nav from './components/NavTop/Nav'
import Searchbar from './components/NavTop/Searchbar.jsx'
import Menu from './components/NavTop/Menu'


function App() {
  return (
        <div className="App">
          <div className='HeaderTop Flexbox dirRow'>
          <div className='Fixedbar'><div className='HeaderTop Flexbox dirRow'>
        
            <LogoTop/> <Nav/>  </div>
          </div>
            <Searchbar />
            </div>
            <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/discover' element={<Discover/>}/>
              <Route path='/Personalspace' element={<Personalpage/>}/>
              <Route path='/*' element={<Fejl/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/delete' element ={<DeleteTrip />} />
              <Route path='/plan' element ={<PlanTrip />} />
          </Routes>

        </div>
    );
  }


export default App;
