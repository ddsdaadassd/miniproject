import { useNavigate } from 'react-router-dom';
import '../component-css/Nav.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className='menuList'>
        <li onClick={() => { navigate('/menu') }}>전체메뉴</li>
        <li onClick={() => { navigate('/new') }}>신상품</li>
        <li onClick={() => { navigate('/best') }}>베스트</li>
        <li onClick={() => { navigate('/set') }}>세트</li>
        <li onClick={() => { navigate('/sale') }}>SALE</li>
      </ul>
    </nav>
  );
}

export default Nav;