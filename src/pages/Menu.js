import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MenuCard from "../component/MenuCard";
import Nav from "../component/Nav";
import '../pages-css/Menu.css';

const Menu = ({ food, convertPrice}) => {
  const [fullMenu, setFullMenu] = useState(food.slice(0, 32));

  return (
    <>
      <Header />
      <Nav />
      <div className="foodcard">

        {
          fullMenu.map((data, i) => {
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

export default Menu;