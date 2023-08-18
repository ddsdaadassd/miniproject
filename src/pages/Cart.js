import { Table } from 'react-bootstrap';
import '../pages-css/Cart.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Nav from '../component/Nav';

const Cart = ({ food, convertPrice }) => {

  let list = JSON.parse(sessionStorage.getItem('item'));
  let totalPrice= list.reduce((acc, temp)=>
  acc + temp.price * temp.count);

  
  console.log(totalPrice);
  
  return (

  
    <>
      <Header />
      <Nav />
      <div className='Cart'>
        <div className='bigTitle'>장바구니</div>
        <hr />
        <Table>
          <thead>
            <tr>
              <td className='smallTitle'><input type='checkbox' name='allCheck' /></td>
              <td className='smallTitle'>상품</td>
              <td className='smallTitle'>옵션정보</td>
              <td className='smallTitle'>수량</td>
              <td className='smallTitle'> 상품금액</td>
            </tr>
          </thead>
          <tbody>
              {
                list.map((data) => {
                  return(
                    <tr className='list'>
                    <td><input type='checkbox' name='Check'/></td>
                    <td><img src={food[data.id].img}/></td>
                    <td>{food[data.id].title}</td>
                    <td>{data.count}</td>
                    <td>{convertPrice(food[data.id].price*data.count)}원</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </Table>
        <div>
            <div>총 상품금액</div>
            <div>{convertPrice(totalPrice)}원</div>
            <div>
              <button>상품주문</button>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;