import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Navv from '../component/Nav';
import '../pages-css/Detail.css';
import { useState } from 'react';

const Detail = ({ food, convertPrice }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // 수량 state
  const [count, setCount] = useState(1);


  // 수량 +/- 함수
  const addSub = (type) => {
    if (type === 'add') {
      setCount(count + 1)
    } else {
      if (count === 1) return;
      setCount(count - 1)
    }
  }

  const itemCart = (id, count) => {

    // let item = sessionStorage.getItem('item');
    // item = JSON.parse(item);
  

    if(sessionStorage.getItem('item')==null) {
      // 상품이 장바구니에 없을 경우
      sessionStorage.setItem('item', JSON.stringify([{'id': id, 'count': count}]));
    } else {
      // 중복된 상품이 있는 경우
      let temp = JSON.parse(sessionStorage.getItem('item'));
      let index;  // 배열위치 저장변수
      let isHave; // 세션스토리지에 있냐, 없냐 저장 변수

      temp.forEach((data, i) => {
        if(id == data.id) {
          index = i;
          isHave = true;
        }
      });

      if(isHave) {
        temp[index].count += count;
      } else {
        temp.push({'id': id, 'count': count});
      }

      sessionStorage.setItem('item', JSON.stringify(temp));
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
                itemCart(food[id].id, count);
                alert('장바구니에 추가 되었습니다.');
                navigate('/cart');
              }}>장바구니</button>
              <button onClick={() => {
                navigate('/order');
              }}>주문하기</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;