import { useNavigate } from 'react-router-dom';
import '../component-css/Nav.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className='Nav'>
        <li onClick={() => { navigate('/menu') }} style={{cursor: 'pointer'}}>전체메뉴</li>
        <li onClick={() => { navigate('/new') }} style={{cursor: 'pointer'}}>신상품</li>
        <li onClick={() => { navigate('/best') }} style={{cursor: 'pointer'}}>베스트</li>
        <li onClick={() => { navigate('/set') }} style={{cursor: 'pointer'}}>세트</li>
      </ul>
    </nav>
  );
}

export default Nav;