import Header from "../component/Header";
import MenuCard from "../component/MenuCard";
import Nav from "../component/Nav";
import '../pages-css/Menu.css';

const Menu = ({ food }) => {
  return (
    <>
      <Header />
      <Nav />
      <div className="foodcard">

        {
          food.map((data, i) => {
            return (
              <MenuCard data={data} key={i} />
            );

          })
        }

      </div>
    </>
  );
}

export default Menu;