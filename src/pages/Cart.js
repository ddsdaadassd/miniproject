import { Table } from 'react-bootstrap';
import '../pages-css/Cart.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import { useEffect, useState } from 'react';

const Cart = ({ food, convertPrice, checkLists, setCheckLists }) => {

  const [total, setTotal] = useState(0);

  let list = JSON.parse(sessionStorage.getItem('item'));

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id])
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkItem = [];
      list.map((list) => checkItem.push(food[list.id].id));
      setCheckLists(checkItem);
    } else {
      setCheckLists([]);
    }
  }

  const isAllChecked =
    list.length === checkLists.length && checkLists.length !== 0;

  const found = checkLists.map((checkLists) =>
    list.filter((el) => food[el.id].id === checkLists)
  );

  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].count);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [food, list, total, found, setTotal])


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
              <td className='smallTitle'><input type='checkbox' name='allCheck' onChange={(e) => {
                handleAllCheck(e.currentTarget.checked);
              }} checked={isAllChecked} /></td>
              <td className='smallTitle'>상품</td>
              <td className='smallTitle'>옵션정보</td>
              <td className='smallTitle'>수량</td>
              <td className='smallTitle'> 상품금액</td>
            </tr>
          </thead>
          <tbody>
            {
              list.map((data) => {
                return (
                  <tr className='list'>
                    <td><input type='checkbox' name='Check' onChange={(e) => {
                      handleCheckList(e.currentTarget.checked, food[data.id].id)
                    }} checked={checkLists.includes(food[data.id].id) ? true : false} /></td>
                    <td><img src={food[data.id].img} /></td>
                    <td>{food[data.id].title}</td>
                    <td>
                      {data.count}
                    </td>

                    <td>{convertPrice(food[data.id].price * data.count)}원</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <div>
          <div className='price'>
            <div>총 상품금액: </div>
            <div><span>{convertPrice(total)}</span>원</div>
          </div>
          <button>상품주문</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;