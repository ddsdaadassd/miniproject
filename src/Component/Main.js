import { useNavigate } from 'react-router-dom';
import '../ComponentCSS/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className='logbar'>
          <div onClick={() => { navigate('/login') }}>로그인</div>
          <p>&nbsp;|&nbsp;</p>
          <div onClick={() => { navigate('/signup') }}>회원가입</div>
          <p>&nbsp;|&nbsp;</p>
          <div onClick={() => { navigate('/cart') }}>장바구니</div>
        </div>
        <div className='search'>
          <input type='text' name='search' />
          <span>&nbsp;&nbsp;</span>
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

      </header>
      <nav>
        <ul>
          <li>전체메뉴</li>
          <li>신상품</li>
          <li>베스트</li>
          <li>세트</li>
          <li>SALE</li>
        </ul>
      </nav>
    </>
  );
}

export default Main;