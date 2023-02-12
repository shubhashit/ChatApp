import './App.css';
import Home from "./conponents/Home";
import Register from './conponents/Register';
import Login from "./conponents/login";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';
import {  useContext } from 'react';
function App() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  if(currentUser.currentUser === null){
    console.log('empty currenuser');
  }
  const ProtectedRoute = ({children})=>{
    if (currentUser.currentUser === null){
      console.log('navigation to login page');
      return (<Navigate to="/login"></Navigate>)
    }
    return children
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute> <Home></Home> </ProtectedRoute>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/Register' element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
