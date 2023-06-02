import React from 'react';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layouts/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layouts/Header/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <BrowserRouter>
  
    <Header/>
 

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    {/* <Footer/> */}
   
   </BrowserRouter>
  );
}

export default App;
