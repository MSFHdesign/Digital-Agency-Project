import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home.js'
import Discover from './Pages/discover.js'
import Personalpage from './Pages/Gunvorsplan.js'
import Fejl from './Pages/fejl.js';
import DeleteTrip from './Pages/deleteTrip.js';
import PlanTrip from './Pages/planTrip.js';
import SeeTrip from './Pages/seeTrip'

// Componenter 
import LogoTop from './components/LogoTop/LogoTop' 
import Nav from './components/NavTop/Nav'
import Searchbar from './components/NavTop/Searchbar.jsx'
import Menu from './components/NavTop/Menu'
import Basket from './components/basket/basket'

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
              <Route path='/seetrip' elements ={<SeeTrip />} />


          </Routes>
          <Basket/>

        </div>
    );
  }


export default App;
