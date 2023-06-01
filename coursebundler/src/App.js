import React from 'react';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layouts/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <BrowserRouter>
   {/* <Router> */}
    <Header/>
   <Courses/>

    <Routes>
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/courses' element={<Courses/>}></Route>
    </Routes>
   {/* </Router> */}
   </BrowserRouter>
  );
}

export default App;
