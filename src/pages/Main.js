import { useNavigate } from 'react-router-dom';
import '../pages-css/Main.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuCard from '../component/MenuCard';
import Header from '../component/Header';
import Nav from '../component/Nav';
import { useState } from 'react';
import Footer from '../component/Footer';

const Main = ({ food, convertPrice }) => {
  const [md, setMd] = useState(food.slice(0, 4));
  const [best, setBest] = useState(food.slice(4, 6));
  const [newitem, setNewItem] = useState(food.slice(10, 12));
  const navigate = useNavigate();

  function NoTransitionExample() {
    return (
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={`${food[32].img}`} text="빠네파스타" onClick={()=> navigate('/detail/'+food[16].id)}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[33].img}`} text="마라탕"  onClick={()=> navigate('/detail/'+food[4].id)} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[34].img}`} text="우곱창전골"  onClick={()=> navigate('/detail/'+food[17].id)}/>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <div className='Main'>
        <Header />
        <Nav />

        <main>
          <div className='carousel'>{NoTransitionExample()}</div>
          <div className='mainMenu'>
            <div>
              <div className='title'>이달의 <span>MD추천메뉴</span></div>
              <div className='mdfoodcard'>
                {
                  md.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} convertPrice={convertPrice}/>
                    );
                  })
                }
              </div>
            </div>
            <div>
              <div>
                <div className='title'>주간 <span>베스트</span></div>
                <div className='foodcard'>
                {
                  best.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} convertPrice={convertPrice}/>
                    );

                  })

                }
                </div>
              </div>
              <div>
                <div className='title'>새로운 <span>상품</span></div>
                <div className='foodcard'>
                {
                  newitem.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} convertPrice={convertPrice}/>
                    );

                  })

                }
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Main;