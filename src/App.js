import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import data from './mockData';
import { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  const [food, setFood] =useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main food={food}/>}></Route>
        {/* <Route path='/menu' element={<Menu />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/best' element={<Best />}></Route>
        <Route path='/set' element={<Set />}></Route>
        <Route path='/sale' element={<Sale />}></Route>*/}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        {/* <Route path='/cart' element={<Cart />}></Route>  */}
      </Routes>
    </div>
  );
}

export default App;
