<<<<<<< Updated upstream
/*App Component
 *
 *Main App fectching a list of places in json and rendering them
 *
 *
 *Author Jeffrey Serio
 */
import React, { Component } from "react";
import Places from "./components/place/Places";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Where should we eat? test test test</h1>
        <div className="container">
          <Places />
=======
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
            <Route path='/*' element={<Home/>}/>
            <Route path='/discover' element={<Discover/>}/>
            <Route path='/Personalspace' element={<Personalpage/>}/>
            <Route path='/*' element={<Fejl/>}/>

          
          
          </Routes>
>>>>>>> Stashed changes
        </div>
      </div>
    );
  }
}

export default App;
