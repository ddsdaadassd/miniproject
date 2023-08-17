import { useState } from 'react';
import Header from '../component/Header';
import MenuCard from '../component/MenuCard';
import Nav from '../component/Nav';
import '../pages-css/Set.css';
import Footer from '../component/Footer';

const Set = ({ food }) => {

  const [setMenu, setSetMenu] = useState(food.slice(24, 32));

  return (
    <>
      <Header />
      <Nav />
      <div className='Set'>
        {
          setMenu.map((data, i) => {
            return (
              <MenuCard data={data} key={i} />
            );
          })
        }
      </div>
      <Footer />
    </>

  );
}

export default Set;