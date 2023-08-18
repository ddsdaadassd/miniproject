import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import data from './mockData';
import { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import Best from './pages/Best';
import Set from './pages/Set';
import New from './pages/New';
import SearchId from './pages/SearchId';
import SearchPw from './pages/SearchPw';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {

  const [food, setFood] =useState(data);
  // 가격 콤마표시 정규식
  const convertPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main food={food} convertPrice={convertPrice}/>} />
        <Route path='/menu' element={<Menu food={food} convertPrice={convertPrice}/>} />
         <Route path='/new' element={<New food={food} convertPrice={convertPrice}/>} />
        <Route path='/best' element={<Best food={food} convertPrice={convertPrice}/>} />
        <Route path='/set' element={<Set food={food} convertPrice={convertPrice}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart food={food} convertPrice={convertPrice}/>} /> 
        <Route path='/id' element={<SearchId />} />
        <Route path='/pw' element={<SearchPw />} />
        <Route path='/detail/:id' element={<Detail food={food} convertPrice={convertPrice}/>} />
      </Routes>
    </div>
  );
}

export default App;
