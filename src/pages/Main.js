import { useNavigate } from 'react-router-dom';
import '../pages-css/Main.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuCard from '../component/MenuCard';
import Header from '../component/Header';
import Nav from '../component/Nav';
import { useState } from 'react';

const Main = ({ food }) => {
  const [md, setmd] = useState(food.slice(0, 4));

  console.log(md);

  function NoTransitionExample() {
    return (
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={`${food[0].img}`} text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[1].img}`} text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[2].img}`} text="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <div className='container'>
        <Header />
        <Nav />

        <main>
          <div className='carousel'>{NoTransitionExample()}</div>
          <div className='mainMenu'>
            <div>
              <div className='title'>이달의 <span>MD추천메뉴</span></div>
              <div className='foodcard'>
                {
                  md.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} />
                    );

                  })

                }

              </div>

            </div>
            <div>
              <div>
                <div className='title'>주간 <span>베스트</span></div>
                {/* <MenuCard food={food} /> */}


              </div>
              <div>
                <div className='title'>새로운 <span>상품</span></div>


                {/* <MenuCard /> */}

              </div>
            </div>
          </div>
        </main>


        <footer>
          <div className='split'>
            <div className='bold'>CS</div>
            <div>
              <div>1999-0422</div>
              <div>운영: 10:00 ~ 17:00</div>
              <div>점심: 12;00 ~ 13:00</div>
              <div>휴무: 주말 및 공휴일</div>

            </div>
          </div>
          <div className='split'>
            <div className='bold'>BANK INFO</div>
            <div>
              <div>신한은행: 110-282-156239</div>
              <div>예금주: 박윤희</div>
            </div>
          </div>
          <div className='split'>
            <div className='bold'>주식회사 피와이에이치</div>
            <div>상호: 주식회사 피와이에이치</div>
            <span>&nbsp;&nbsp;</span>
            <div>대표: 박윤희</div>
            <span>&nbsp;&nbsp;</span>
            <div>사업자등록번호: 123-45-67890</div>
            <span>&nbsp;&nbsp;</span>
            <div>대표번호: 010-9665-0442</div>
            <span>&nbsp;&nbsp;</span>
            <div>이메일: newyoonhee1@naver.com</div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;