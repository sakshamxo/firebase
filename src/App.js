import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Auth from './firebase/Auth';
import Cloudstore from './Cloudstore';
import Mediastore from './Mediastore';

const App = () => {
  return (
    <div className='container' >
      
      <Link to="/auth" >Authentication</Link>
      <Link to="/data" >Cloud Store</Link>
      <Link to="/media" >store media</Link>
      <hr />
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/data' element={<Cloudstore/>}/>
        <Route path='/media' element={<Mediastore/>}/>
      </Routes>
    </div>
  )
}

export default App