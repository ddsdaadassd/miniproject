import { useState } from 'react';
import '../pages-css/Best.css';
import Header from '../component/Header';
import Nav from '../component/Nav';
import MenuCard from '../component/MenuCard';
import Footer from '../component/Footer';

const Best = ({ food, convertPrice }) => {
  const [bestMenu, setBestMenu] = useState(food.slice(0, 10))
  return (
    <>
      <Header />
      <Nav />
      <div className='Best'>
        {
          bestMenu.map((data, i) => {
            return (
              <MenuCard data={data} key={i} convertPrice={convertPrice}/>
            );
          })
        }
      </div>
      <Footer />
    </>

  );
}

export default Best;