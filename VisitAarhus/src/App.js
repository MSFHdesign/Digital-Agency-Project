import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'

import Home from './Pages/Home.js'
import Discover from './Pages/discover.jsx'
import Personalpage from './Pages/Gunvarsplan.jsx'
import Fejl from './Pages/fejl.js';

class App extends Component {

    render()
    {

      return(
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
}

export default App;
