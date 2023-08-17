import { useState } from 'react';
import Header from '../component/Header';
import MenuCard from '../component/MenuCard';
import Nav from '../component/Nav';
import '../pages-css/New.css';
import Footer from '../component/Footer';

const New = ({ food, convertPrice}) => {
  const [newMenu, setNewMenu] = useState(food.slice(10, 20));

  return (
    <>
      <Header />
      <Nav />
      <div className='New'>
        {
          newMenu.map((data, i) => {
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

export default New;