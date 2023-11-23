import React from 'react'
import {Routes as Routez, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SinglePage from './Components/Posts/SinglePage';
import EditPost from './Components/Posts/EditPost';

function Routes() {
  return (
    <Routez>
        <Route path='/' element={<Home/>} />
        <Route path='/singlePost/:id' element={<SinglePage/>}/>
        <Route path='/editPost/:id' element={<EditPost/>}/>
    </Routez>
  )
}

export default Routes