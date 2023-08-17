import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Navv from '../component/Nav';
import '../pages-css/Detail.css';
import { useState } from 'react';

const Detail = ({ food, convertPrice }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const addSub = (type) => {
    if(type === 'add') {
      setCount(count + 1)
    } else {
      if(count === 1) return;
      setCount(count - 1)
    }
  }

  return (
    <>
      <Header />
      <Navv />
      <div className='Detail'>
        <div className='orderbox'>
          <div>
            <img src={food[id].img} />
          </div>
          <div className='textbox'>
            <div>
              <p className='title'>{food[id].title}</p>
              <p className='price'>가격: {convertPrice(food[id].price)}원</p>
              <p className='cnt'>수량: 
              <button onClick={() => {
                addSub('sub');
              }}>-</button>
              {count}
              <button onClick={() => {
                addSub('add');
              }}>+</button>
              </p>
              <hr />
              <p className='total'>총 가격: {convertPrice(Number(food[id].price) * count)}원</p>
            </div>
            <div className='btn'>
            <button onClick={() => {
              alert('장바구니에 추가 되었습니다.')
            }}>장바구니</button>
            <button onClick={() => {
              navigate('/order');
            }}>주문하기</button>
            </div>
          </div>
        </div>
        {/* 
        <Nav className="mt-5" justify variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => {

            }}>상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => {

            }}>리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => {

            }}>반품,교환정보</Nav.Link>
          </Nav.Item>
        </Nav> */}

      </div>
      <Footer />
    </>
  );
}

export default Detail;