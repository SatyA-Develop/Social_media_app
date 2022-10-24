import React from 'react';
import Login from './components/login/Login';
import Home from '../src/pages/home/Home'
import Profile from './pages/Profile/Profile';
import Register from './components/register/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>


   </>
  );
}

export default App;
