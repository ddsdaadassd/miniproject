import { Table } from 'react-bootstrap';
import '../pages-css/Cart.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Nav from '../component/Nav';

const Cart = () => {
  return(
    <>
    <Header />
    <Nav />
    <div className='Cart'>
      <div>장바구니</div>
      <hr />
      <Table>
        <thead>
          <tr>
            <td><input type='checkbox' name='allcheck'/></td>
            <td>상품/옵션정보</td>
            <td>수량</td>
            <td>상품금액</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>  
    </div>
    <Footer />
    </>
  );
}

export default Cart;