import React from 'react';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layouts/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layouts/Header/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgetpassword from './components/Auth/Forgetpassword';
import Resetpassword from './components/Auth/Resetpassword';
import Contact from './components/Contacts/Contact';
import Request from './components/Request/Request';

function App() {
  return (
    <BrowserRouter>
  
    <Header/>
 

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/forgetpassword' element={<Forgetpassword/>}></Route>
      <Route path='/resetpassword/:token' element={<Resetpassword/>}></Route>
      <Route path='/request' element={<Request/>}></Route>
    </Routes>
    <Footer/>
   
   </BrowserRouter>
  );
}

export default App;
